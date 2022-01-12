export const loadData = async (input) => {
    const data = await fetch(`https://www.reddite.com/r/${input}.json`);
    return data.json();
  }