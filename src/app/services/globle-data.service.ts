export class GlobalDataService {

  static
  cable_api = 'https://api.gaokao2017.cn'

  static
  students_api() {
    return GlobalDataService.cable_api + '/students'
  }

  static
  dsin_api() {
    return GlobalDataService.cable_api + '/dsin'
  }

  static
  universities_api() {
    return GlobalDataService.cable_api + '/universities'
  }

  static
  messages_api() {
    return GlobalDataService.cable_api + '/messages'
  }

  static
  campaigns_api() {
    return GlobalDataService.cable_api + '/campaigns'
  }
  static
  stories_api() {
    return GlobalDataService.cable_api + '/stories'
  }

  static
  members_api(){
    return GlobalDataService.cable_api + '/members'
  }

}