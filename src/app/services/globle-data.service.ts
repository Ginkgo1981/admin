export class GlobalDataService {

  static
  cable_api = 'http://api.gaokao2017.cn'

  static
  users_api() {
    return GlobalDataService.cable_api + '/users'
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

}