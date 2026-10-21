-- School Harness D1 Schema: Academy Attendance, Parent LINE Notification & AI Lesson Report Engine

CREATE TABLE IF NOT EXISTS lesson_logs (
  id TEXT PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  subject TEXT NOT NULL,
  topic_covered TEXT NOT NULL,
  quiz_score INTEGER NOT NULL,
  checkin_notification TEXT NOT NULL,
  ai_parent_report TEXT NOT NULL,
  tuition_status TEXT NOT NULL DEFAULT 'paid_auto',
  created_at TEXT NOT NULL
);
