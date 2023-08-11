const CronJob = require('cron').CronJob

export default function startSchedule(callFunc: Function) {
  try {
    const seconds = 0 // 0-59 или "*"- каждую секунду
    const minutes = '*' // 0-59 или "*"- каждую минуту
    const hours = 19 // 0-23 или "*"- каждый час
    const dayOfMonth = '*' // 1-31 или "*"- каждый день месяца
    const months = '*' // 0-11 (Янв-Дек) или "*"- каждый месяц в году
    const dayOfWeek = '*' // 0-6 (Вскр-Суббота) или "*" каждый день недели

    const job = new CronJob(
      `${seconds} ${minutes} ${hours} ${dayOfMonth} ${months} ${dayOfWeek}`,
      callFunc, // Функция
      null,
      false,
      'Europe/Moscow' // Часовой пояс
    )
    job.start()
  } catch (e) {
    console.error('Error CronJob: ', e)
  }
}
