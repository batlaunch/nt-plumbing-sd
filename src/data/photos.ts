// All 44 photos from NTP's Yelp listing - NO stock photos used
const photoIds = [
  "xotUmIw4oPCgxALWxykLaQ",
  "4dR7TDBrMzHypMEX7B962g",
  "fLKMy8MJF_wGnLIodG377g",
  "3GsposTukR3DamGOb5_YAQ",
  "Of6S0dEOrBOW3FAmeCv-Jg",
  "5nkn7xgWq7pKxh7_ymzcNw",
  "IuIF4tRLC6oBwHO9x4mR5g",
  "sRqEsIZfvz9Z3s-AOUXfpQ",
  "kCBJoGV5L1u_zOb2Ctzlig",
  "mdd_JtWbfytG7Ctffbh5UQ",
  "Gimg68OzE5II5wztSOltsg",
  "uR7RCETAh3jEct_4h_G17Q",
  "uIvh4ZttheQTpSgf9eXA-w",
  "de4SMRc925ShmJz4-M7jLg",
  "ZE6UAuTbCLN5TruQ6FOaFg",
  "kRjgKLNgV-s4yCYvbTnRZw",
  "5icw5OSt-np3lFPQrUixug",
  "NqNt8yyl-XcxU0kM5Q3aoA",
  "514gwqVa0rP0E7Fc-np7nQ",
  "QCKhVzbC4Mscg0RPmB9aFQ",
  "A9FXKWs0g4BJJvUj0NMnOg",
  "tLj5ToGhGiauAtl759Tc-A",
  "PLhEquEVLCgwJY1nyS0_JQ",
  "natv89qiQnCgWfqkLJJqZw",
  "nOhOdRubb7xThqOVv7iErg",
  "hjav3xpdSY1aDdlEW9zA_Q",
  "c939EtdKfwAjNgsja_PFtw",
  "imNj-qBKBpnFYrf9EuOlQA",
  "EIYaulp2iUlTf-ZjwWOLdQ",
  "aWVkxexXW57x0b-pdaVuNg",
  "JT7v2AtfcuGlnsEXB_Rn7A",
  "gqQtbFSd27hTI_0tW5JgiQ",
  "i_1oI3RgSduKLvaeiPcwTQ",
  "4jGW4yt3a00jN11u6r0Gag",
  "RMlsqP7ebWKZIKiqgFLqhQ",
  "UpNpsPZQ6N12U7c_bOo6aQ",
  "sUWowX9NifW1Sntwtip0-w",
  "DdMo8fVsCjoLSih2j3lBZw",
  "R-dp6I0P0D6VeqTjf9vilw",
  "zuXkpDm-_bWvY34MKVqEpQ",
  "ueo-1ygaCS8Oq9hhI-M6OQ",
  "53bZd82Xmalw825bRrgqgA",
  "G773VSjRZ-n6EupZlOPb9w",
  "p5qBInaXtzvmWleCsDeNNw",
];

export const getPhotoUrl = (id: string, size: "l" | "o" | "258s" = "l") =>
  `https://s3-media0.fl.yelpcdn.com/bphoto/${id}/${size}.jpg`;

export const allPhotos = photoIds.map((id) => ({
  id,
  url: getPhotoUrl(id, "l"),
  thumbnail: getPhotoUrl(id, "258s"),
  alt: "NTP Plumbing - El Cajon, CA",
}));

export const heroPhoto = getPhotoUrl(photoIds[0], "o");
