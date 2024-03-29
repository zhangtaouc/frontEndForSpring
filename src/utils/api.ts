import { httpGet, httpPost, httpDelete } from './request'
import { UserListResponse, User } from '@/map/interface'

const apiUrl = 'http://1.94.101.51:8081'

// 查询全部用户
export function getUserListApi(): Promise<UserListResponse> {
  return httpGet(`${apiUrl}/student/getAll`)
}

// 模糊查询用户
export function getUserListByNameApi(name: string): Promise<UserListResponse> {
  return httpGet(`${apiUrl}/student/getUserListByName?name=${name}`)
}

export function getUserByNameApi(name: string): Promise<UserListResponse> {
  return httpGet(`${apiUrl}/student/getStudentListByName?name=${name}`)
}

// 添加用户
export function addUserApi(body: User): Promise<UserListResponse> {
  return httpPost(`${apiUrl}/student/addStudent`, body)
}

// 编辑用户
export function editUserApi(body: User): Promise<UserListResponse> {
  return httpPost(`${apiUrl}/student/updateStudent`, body)
}

// 删除用户
export function deleteUserApi(username: string): Promise<UserListResponse> {
  return httpDelete(`${apiUrl}/student/deleteStudent?name=${username}`)
}

// 获取本人信息

export function getPersonalInfo(): Promise<UserListResponse> {
  return httpGet(`${apiUrl}/me/getAll`)
}
