/* Pure quiz calculations. No DOM, storage, network, or saved answers. */
(() => {
  'use strict';
  const C = window.QUIZ_CONFIG;
  function questionsForStage(stageId) {
    const stage = C.stages.find(s => s.id === stageId);
    if (!stage) throw new Error('Choose a valid relationship stage.');
    return C.questions.map((q, i) => ({ ...q, ...(stage.overrides[i] || {}) }));
  }
  function assess(answers, stageId) {
    const questions = questionsForStage(stageId);
    if (answers.length !== questions.length || questions.some((q, i) => !Number.isInteger(answers[i]) || !q.answers[answers[i]])) throw new Error('Complete every question first.');
    const scores = questions.map((q, i) => q.answers[answers[i]].score);
    const maximum = questions.reduce((n, q) => n + Math.max(...q.answers.map(a => a.score)), 0);
    const total = scores.reduce((a, b) => a + b, 0);
    const verdict = C.verdicts.find(v => total <= v.maxScore) || C.verdicts.at(-1);
    const categories = C.categories.map(category => {
      const sum = category.questionIndices.reduce((n, i) => n + scores[i], 0);
      const max = category.questionIndices.reduce((n, i) => n + Math.max(...questions[i].answers.map(a => a.score)), 0);
      const value = Math.round((1 - sum / max) * 100);
      return { id: category.id, name: category.name, description: category.description, value, label: value >= 75 ? 'Stronger signals' : value >= 40 ? 'Mixed signals' : 'Worth a conversation' };
    });
    return { ...verdict, total, percent: Math.round(total / maximum * 100), stage: C.stages.find(s => s.id === stageId).name, stageId, categories, topicScores: scores, safety: questions.some((q, i) => q.safety && scores[i] === 3) };
  }
  function compare(first, second) {
    return {
      categories: first.categories.map((a, i) => ({ name: a.name, first: a.value, second: second.categories[i].value, gap: Math.abs(a.value - second.categories[i].value) })),
      topics: C.questions.map((q, i) => ({ name: q.topic, gap: Math.abs(first.topicScores[i] - second.topicScores[i]) })).filter(t => t.gap >= 2).sort((a, b) => b.gap - a.gap).slice(0, 3),
      differentStages: first.stageId !== second.stageId
    };
  }
  window.VIBE_MODEL = { questionsForStage, assess, compare };
})();
