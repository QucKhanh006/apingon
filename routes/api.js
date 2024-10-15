const router = require("express").Router();
const { getLink1 } = require("../controllers/getLink1");
const { getLink2 } = require("../controllers/getLink2");
const { ad } = require("../controllers/ad");
const { adv2 } = require("../controllers/adv2");
const { cadao } = require("../controllers/cadao");
const { canhgame } =
require("../controllers/canhgame");
const { capcut } =
require("../controllers/capcut");
const { sound } = require("../controllers/sound");
const { soundv2 } = require("../controllers/soundv2");
const { girl } = require("../controllers/girl");
const { girlduyetbox } =
require("../controllers/girlduyetbox");
const { girlv2 } = require("../controllers/girlv2");
const { science } = require("../controllers/science");
const { vdanime } = require("../controllers/vdanime");
const { phongcanh } = require("../controllers/phongcanh");
const { phongcanhbox } =
require("../controllers/phongcanhbox");
const { phongcanhv2 } = require("../controllers/phongcanhv2")
;
const { putin } =
require("../controllers/putin");
const { randomvid } =
require("../controllers/randomvid")
const { danhngon } = require("../controllers/danhngon");
const { denvau } =
require("../controllers/denvau");
const { donld } =
require("../controllers/donld");
const { ngontinh } = require("../controllers/ngontinh");
const { nyvanh } =
require("../controllers/nyvanh");
const { vdanime2 } = require("../controllers/vdanime2");
const { vdcosplay } =
require("../controllers/vdcosplay");
const { vdcosplayv2 } =
require("../controllers/vdcosplayv2");
const { vidhaihuoc } =
require("../controllers/vidhaihuoc");
const { videogai } =
require("../controllers/videogai");
const { tamtrang } =  require("../controllers/tamtrang");
const { tamtrangv2 } = require("../controllers/tamtrangv2");
const { chill } = require("../controllers/chill");
const { chillvn } =
require("../controllers/chillvn");
const { thinhv2 } = require("../controllers/thinhv2");
const { cadaov2 } = require("../controllers/cadaov2");
const { anime } = require("../controllers/anime");
const { animeanhve } =
require("../controllers/animeanhve");
const { animemotmat } =
require("../controllers/animemotmat");
const { animethuong } =
require("../controllers/animethuong");
const { animev2 } = require("../controllers/animev2");
const { rem } = require("../controllers/rem");
const { remix } =
require("../controllers/remix");
const { robot } = require("../controllers/robot");
const { joker } = require("../controllers/joker");
const { mp3 } =
require("../controllers/mp3");
const { gaiaodai } = require("../controllers/gaiaodai");
const { gaiaodaiv2 } = require("../controllers/gaiaodaiv2");
const { gaidutdut } =
require("../controllers/gaidutdut");
const { thinh } = require("../controllers/thinh");
const { trai } = require("../controllers/trai");
const { traiv2 } = require("../controllers/traiv2");
const { cosplay } = require("../controllers/cosplay");
const { cosplayv2 } = require("../controllers/cosplayv2");
const { cover } =
require("../controllers/cover");
const { doraemon } = require("../controllers/doraemon");
const { cauhoi } = require("../controllers/cauhoi");
const { cauhoiv2 } = require("../controllers/cauhoiv2");
const { sleep } = require("../controllers/sleep");
const { sontung } =
require("../controllers/sontung");
const { hi } = require("../controllers/hi");
const { du } =
require("../controllers/du");
const { joe } =
require("../controllers/joe");

router.get("/getLink1", getLink1);
router.get("/getLink2", getLink2);
router.get("/sound", sound);
router.get("/soundv2", soundv2);
router.get("/girl", girl);
router.get("/vdgirl", girlduyetbox);
router.get("/cadao", cadao);
router.get("/cadaov2", cadaov2);
router.get("/canhgame", canhgame);
router.get("/capcut", capcut);
router.get("/girlv2", girlv2);
router.get("/ad", ad);
router.get("/adv2", adv2);
router.get("/danhngon", danhngon);
router.get("/denvau", denvau);
router.get("/donld", donld);
router.get("/trai", trai);
router.get("/traiv2", traiv2);
router.get("/joker", joker);
router.get("/mp3", mp3);
router.get("/gaiaodai", gaiaodai);
router.get("/gaidutdut", gaidutdut);
router.get("/gaiaodaiv2", gaiaodaiv2);
router.get("/thinhv2", thinhv2);
router.get("/thinh", thinh);
router.get("/ngontinh", ngontinh);
router.get("/nyvanh", nyvanh) 
router.get("/science", science);
router.get("/tamtrang", tamtrang);
router.get("/tamtrangv2", tamtrangv2);
router.get("/chill", chill);
router.get("/chillvn", chillvn);
router.get("/rem", rem);
router.get("/remix", remix);
router.get("/robot", robot);
router.get("/doraemon", doraemon);
router.get("/vdanime", vdanime);
router.get("/vdanime2", vdanime2);
router.get("/vdcosplay", vdcosplay);
router.get("/vdcosplayv2", vdcosplayv2);
router.get("/vidhaihuoc", vidhaihuoc);
router.get("/videogai", videogai);
router.get("/anime", anime);
router.get("/animeanhve", animeanhve);
router.get("/animemotmat", animemotmat);
router.get("/animethuong", animethuong);
router.get("/animev2", animev2);
router.get("/cosplay", cosplay);
router.get("/cosplayv2", cosplayv2);
router.get("/cover", cover);
router.get("/phongcanh", phongcanh);
router.get("/phongcanhbox", phongcanhbox);
router.get("/phongcanhv2", phongcanhv2);
router.get("/putin", putin);
router.get("/randomvid", randomvid);
router.get("/cauhoi", cauhoi);
router.get("/cauhoiv2", cauhoiv2);
router.get("/sleep", sleep);
router.get("/sontung", sontung);
router.get("/hi", hi);
router.get("du", du);
router.get("joe", joe);

module.exports = router;
