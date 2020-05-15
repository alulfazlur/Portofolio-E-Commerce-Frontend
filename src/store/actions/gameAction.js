import axios from "axios";

export const doRegisterGame = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().game.gameName,
      tile: getState().game.tile,
      banner: getState().game.banner,
      publisher: getState().game.publisher,
      description: getState().game.description,
      category: getState().game.category,
      gplay: getState().game.gplay,
      appstore: getState().game.appstore,
      website: getState().game.website,
      community: getState().game.community,
      promo: getState().game.promo,
      discount: getState().game.discount,
    };
    const myJSON = JSON.stringify(bodyRequest);
    console.warn("myJSON Body Req", myJSON)
    const token = localStorage.getItem("token");
    await axios
      .post("http://0.0.0.0:9000/admin/game", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        alert(`${getState().game.gameName} is registered`)
        dispatch({ type: "SUCCESS_REGISTER_GAME" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteGame = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:9000/admin/game", {
        headers: {Authorization: `Bearer ${token}`},
        params: {name : getState().game.gameNameDel }}, {
      })
      .then(async (response) => {
        alert(`${getState().game.gameNameDel} is deleted`)
        dispatch({ type: "SUCCESS_REGISTER_GAME" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getGameList = (props) => {
  return async (dispatch) => {
    await axios
      .get("http://0.0.0.0:9000/public/game")
      .then(async(response) => {
        dispatch({ type: "SUCCESS_GET_GAME_LIST", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeInputGame = (e) => {
  return {
    type: "CHANGE_INPUT_GAME",
    payload: e,
  };
};