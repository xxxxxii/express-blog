const Chan = require("chanjs");
let {utils: { filterFields, formatDay}} = Chan.helper;

const CommonService = require("./common.js");
class HomeService {
  constructor() { }
  // 首页
  static async home() {
    try {
      //banner轮播图
      let bannerSlide = await CommonService.bannerSlide();

      //文章轮播图
      let slide = await CommonService.getArticleList(0, 5, 3);
      const slideField = ["id", "title", "path", "link", "img"];
      slide = filterFields(slide, slideField);

      //头条
      let top = await CommonService.getArticleList(0, 1, 1);
      const topField = ["id", "title", "path", "description", "img"];
      top = filterFields(top, topField);

      //最新文章
      let news = await CommonService.getArticleList(0, 5);
      const newField = ["id", "title", "path", "createdAt"];
      news = filterFields(news, newField);

      let topnews = { top: top[0], news };

      //主栏目-图-文
      // let cate = await CommonService.getAllParentCategory();
      // const cateField = ["id", "name", "path", "pinyin"];
      // cate = filterFields(cate, cateField);
      // let article = [];
      // for (let i = 0, item; i < cate.length; i++) {
      //   let item = cate[i];
      //   let tags = [];
      //   // 推荐
      //   let top = await CommonService.getArticleListByCid(item.id, 1, 2);
      //   // 最新
      //   let list = await CommonService.getArticleListByCid(item.id, 4);
      //   list = formatDay(list);

      //   // tag列表
      //   for (let j = 0, sub; j < list.length; j++) {
      //     sub = list[j];
      //     let res = await CommonService.getTagsFromArticleByAid(sub.id);
      //     tags.push(...res);
      //   }
      //   article.push({ top, list, tags, category: item })
      // }

      //图片列表(10条)
      let imgs = await CommonService.getNewImgList(8);
      const imgsField = ["id", "title", "path", "img"];
      imgs = filterFields(imgs, imgsField);

      //推荐（10条）
      let recommend = await CommonService.getArticleList(0, 10, 2);

      //热门（10条访问量）
      let hot = await CommonService.getArticlePvList(10);

      //推荐带图片
      let recommendImgs = await CommonService.getNewImgList(5, '', 2);
      const recommendImgsField = ["id", "title", "path", "img", "description"];
      recommendImgs = filterFields(recommendImgs, recommendImgsField);
      return { bannerSlide,slide, topnews,  imgs, recommend, recommendImgs,hot };
    } catch (err) {
      console.error(err);
      return err;
    }
  }


  // 列表页
  static async list(id, currentPage = 1, pageSize = 20) {
    try {
      // 文章列表
      const data = await CommonService.list(id, currentPage, pageSize);
      data.list = formatDay(data.list);
      // 本类推荐
      let recommend = await CommonService.getArticleListByCid(id, 5, 2);
      // 本类热门
      let hot = await CommonService.getArticlePvList(10, id);
      const hotField = ["id", "title", "path"];
      hot = filterFields(hot, hotField);
      // 本类图文
      const imgs = await CommonService.getNewImgList(5, id);
      return { data, recommend, hot, imgs };
    } catch (err) {
      console.error(err);
      return err;
    }
  }


  // 文章页
  static async article(id) {
    try {
      // 本类最新
      let news = await CommonService.getArticleListByCid(id, 10);
      // 本类热门
      let hot = await CommonService.getArticlePvList(10, id);
      const hotField = ["id", "title", "path"];
      hot = filterFields(hot, hotField);
      // 本类图文
      const imgs = await CommonService.getNewImgList(5, id);
      return { news, hot, imgs };
    } catch (err) {
      console.error(err);
      return err;
    }
  }


  // 单页列表页
  static async page(id, currentPage = 1, pageSize = 10) {
    try {
      const data = await CommonService.list(id, currentPage, pageSize);
      data.list = formatDay(data.list);
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }


  // tag列表页
  static async tags(path, currentPage = 1, pageSize = 10) {
    try {
      const data = await CommonService.tags(path, currentPage, pageSize);
      data.list = formatDay(data.list);
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

module.exports = HomeService;