export const authing = {}

export const auth = () => {

}

export const login = () => {

}

export const check = () => {

}

export const checkAndLogin = () => {
  if (check()) {
    return new Promise(resolve => resolve(true))
  } else {
    login()
  }
}