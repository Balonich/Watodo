import axiosInstance from "./axiosInstance";

export async function addUser(user) {
  try {
    const response = await axiosInstance.post("register", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    console.log(`error: ${error}`);
    console.log(`response: ${response}`);
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function loginUser(user) {
  try {
    const response = await axiosInstance.post("login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    // TODO: Check why error var is just a string, not an object
    // console.log(`error: ${error}`);
    // console.log(`response: ${response}`);
    throw new Error(`Something went wrong ${error}`);
  }
}
