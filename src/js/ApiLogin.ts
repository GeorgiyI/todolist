export default class ApiLogin {
  public static async login(login: string, pass: string) {
    let response: any;
    try {
      response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ login: login, pass: pass }),
      });
    } catch (err) {
      console.log("Error during login. ", err);
    }
    if (response.ok) {
      let val = await response.json();
      return val;
    }
  }
  public static async checkLogin(navigator: Function) {
    let response: any;
    try {
      response = await fetch("http://localhost:5000/api/checkLogin", {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      });
    } catch (err) {
      console.log("Error during login. ", err);
    }
    if (response.ok) {
      let json = await response.json();
      if (!json.logged) {
        navigator("/");
      }
    }
  }
}
