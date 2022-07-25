/**
 * 设置storage
 * @param value
 * 存
 */
export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 获取storage
 * @param value
 * 取
 */
export const getStorage = (key) => {
  const temp = localStorage.getItem(key);
  if (temp === null || typeof temp === "undefined" || temp == "undefined")
    return null;
  return JSON.parse(temp);
};

/**
 * 移除storage
 * @param value
 */
export const clearStorage = (key) => {
  localStorage.removeItem(key);
};
