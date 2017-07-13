import {
  genders,
  locales,
  maleProfilePhotoLinks,
  femaleProfilePhotoLinks,
  timezones,
  latitudes,
  longitudes
} from './dummyData';

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const generateRandomUserData = () => {
  const gender = getRandomItem(genders);
  const locale = getRandomItem(locales);
  const profilePhoto = gender === 'female' ? getRandomItem(femaleProfilePhotoLinks) : getRandomItem(maleProfilePhotoLinks);
  const timezone = getRandomItem(timezones);
  const lat = getRandomItem(latitudes);
  const long = getRandomItem(longitudes);
  return {
    gender,
    locale,
    profilePhoto,
    timezone,
    lat,
    long
  };
};

export default generateRandomUserData;
