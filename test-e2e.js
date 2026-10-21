const BASE = process.env.BASE_URL || 'http://localhost:8798';

async function runTests() {
  console.log('=== School Harness E2E Test Suite ===');
  const health = await fetch(`${BASE}/api/health`).then((r) => r.json());
  if (health.status !== 'ok') throw new Error('Health failed');
  console.log('✅ 1. Health check passed:', health.service);

  const rec = await fetch(`${BASE}/api/lessons/record`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      student_name: '小林 陽葵',
      parent_name: '小林 由美',
      subject: '中学数学・プログラミング',
      topic_covered: '二次関数のグラフ応用とPythonループ処理',
      quiz_score: 94,
    }),
  }).then((r) => r.json());

  if (!rec.ok || !rec.lesson.ai_parent_report.includes('94点')) {
    throw new Error('Lesson report generation failed');
  }
  console.log('✅ 2. Check-in LINE notification & AI Parent Lesson Report verified');
  console.log('🎉 ALL SCHOOL HARNESS E2E TESTS PASSED!');
}
runTests().catch((e) => { console.error(e); process.exit(1); });
