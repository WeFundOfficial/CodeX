import axios from "axios";

export const  loadBlog = async() => {
  try {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wefundofficial";

    const data: any = (await axios.get(mediumURL)).data;
    const avatar = data.feed.image;
    const profileLink = data.feed.link;
    const res = data.items;
    const posts = res.filter((item: any) => item.categories.length > 0);

    const itemRows: any[] = [];
    posts.forEach((item: any, i: number) => {
      item["avatar"] = avatar;
      item["profilelink"] = profileLink;
      const row = Math.floor(i / 3);
      if (!itemRows[row]) itemRows[row] = [];
      itemRows[row].push(item);
    });
    return posts;
  } catch (e) {
    console.log(e)
  }
  return [];
}