const fs = require('fs');
const path = require('path');

class OpenController {
  //60秒读懂世界
  static async news60s(req, res, next) {
    try {
      const url = `https://api.qqsuu.cn/api/dm-60s?type=json`;

      if (global.fetch) {
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`60s.html`, { name, time, data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  //简报
  static async jianbao(req, res, next) {
    try {
      if (global.fetch) {
        const url = `https://api.qqsuu.cn/api/dm-bulletin`;
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`jianbao.html`, { data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  static async getIp() {
    try {
      if (global.fetch) {
        const url = `https://qifu-api.baidubce.com/ip/local/geo/v1/district`;
        const result = await fetch(url);
        const { name, time, data } = await result.json();
        res.render(`jianbao.html`, { data });
      }
      next({ message: "当前node版本还不支持fetch" });
    } catch (error) {
      next(error);
    }
  }

  static async pdf(req, res, next) {
    try {
      let file = req.query.file || '';
      const filePath = path.join(__dirname, `../../../${file}`); 
      const fileStream = fs.createReadStream(filePath);
      res.setHeader('Content-Type', 'application/pdf');
      fileStream.pipe(res);
      fileStream.on('error', (err) => {
        next(err);
      });
      fileStream.on('end', () => {
        res.end();
      });
    } catch (error) {
       // 关闭文件流
      next(error);
    }
  }
}

module.exports = OpenController;
