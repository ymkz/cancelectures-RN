export function unique(array: any[]) {
  return Array.from(new Set(array))
}

export function mapArrayToObjectArray(array: any[]) {
  const result: Lecture[] = []
  for (let i = 0; i < array.length; i = i + 8) {
    result.push({
      date: array[i],
      group: array[i + 3],
      memo: array[i + 7],
      room: array[i + 6],
      status: array[i + 1],
      teacher: array[i + 5],
      time: array[i + 2],
      title: array[i + 4]
    })
  }
  return result
}

export function mapDataToSection(lectures: Lecture[]) {
  return unique(lectures.map(lecture => lecture.date)).map(date => ({
    data: lectures.filter(lecture => lecture.date === date),
    title: date
  }))
}

export function mapGroupFromJpnToEng(group: string) {
  switch (group) {
    case '教養':
      return 'culture'
    case '法文学部':
      return 'law'
    case '教育学部':
      return 'education'
    case '人間科学部':
      return 'humanity'
    case '医学部':
      return 'medic'
    case '総合理工学部':
      return 'engineering'
    case '生物資源科学部':
      return 'biology'
    case '大学院':
      return 'master'
    default:
      return 'default'
  }
}

export const lectureDetailPrefix = {
  memo: '備考',
  room: '教室',
  status: '分類',
  time: '時限'
}

export const groupColor = {
  biology: '#8BC34A',
  culture: '#03A9F4',
  default: '#2e3440',
  education: '#FF9800',
  engineering: '#9575CD',
  humanity: '#FFEB3B',
  law: '#F44336',
  master: '#607D8B',
  medic: '#009688'
}
