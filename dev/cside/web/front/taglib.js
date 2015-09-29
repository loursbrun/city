var Tracker = function () {

    //
    // config
    //
    this.gender = "Women";
    this.category = "Accessories";
    this.anim = "Bootstrap";

    //
    // datas Page
    //
    this.pageDatas = {
        "HP": {
            "dn": "Home",
            "dt": "Animation"
        }
    }

    //
    // datas Link
    //
    this.linkDatas = {
        "WATCH_VIDEO": {
            "lid": "Watchvideo",
            "pos": "AnimHome"
        },
        "PLUS_BUTTON": {
            "lid": "PlusButton",
            "pos": "PageAnim",
            "sku": "#sku#",
            "pcat": "#pcat#"
        },
        "MORE": {
            "lid": "MoreDetails",
            "pos": "PageAnim",
            "sku": "#sku#",
            "pcat": "#pcat#"
        }
    }

    //
    // Base config
    //
    this.commonPage = {}

    this.commonClick = {}

    this.common = {
        "site": "louisvuitton.com",
        "anim": this.anim,
        "gen": this.gender,
        "category": this.category
    };

    this.metaData = ['meta.animation', 'meta.country', 'meta.language', 'meta.page_type', 'meta.logged_state', 'meta.page_category', 'meta.gender'];

    //
    // setup
    //
    this.updateDatas();
}

Tracker.prototype.mixKeys = function (o, keys) {
    for (var z in o) {
        for (var k in keys) {
            var currentKey = '#' + k + '#';
            if (typeof(o[z]) == "string" && o[z].indexOf(currentKey) != -1) {
                o[z] = o[z].split("#" + k + "#").join(keys[k]);
            }
        }
    }
    return o;
}

Tracker.prototype.extend = function (source, override) {
    var result = {};
    for (var z in source)result[z] = source[z];
    for (var z in override)result[z] = override[z];
    return result;
}

Tracker.prototype.updateDatas = function () {
    try {
        var cp = this.extend(this.convertParamsForDebug(getBaseTag1()), this.convertParamsForDebug(this.common));
        this.commonPage = this.extend(cp, this.convertParamsForDebug(this.commonPage));
        var cc = this.extend(this.convertParamsForDebug(getBaseTag2()), this.convertParamsForDebug(this.common));
        this.commonClick = this.extend(cc, this.convertParamsForDebug(this.commonClick));

    } catch (e) {
    }
    try {
        if (utag_data.device && utag_data.device != "undefined") {
            this.commonPage.dev = utag_data.device;
            this.commonClick.dev = utag_data.device;
        }
    } catch (e) {

    }
}

Tracker.prototype.trackPage = function (id, keys) {
    this.updateDatas();

    var o = this.extend(this.convertParamsForDebug(this.metaDatas()), this.commonPage);
    o = this.extend(o, this.convertParamsForDebug(this.pageDatas[id]));
    o = this.convertParamsForDebug(o);

    //replacements
    if (typeof keys != "undefined")
        o = this.mixKeys(o, keys);

    //add full path for page dn
    var path = "";
    if (typeof o.gen != "undefined" && o.gen)
        path += o.gen + "/";
    if (typeof o.category != "undefined" && o.category)
        path += o.category + "/";
    if (typeof o.anim != "undefined" && o.anim)
        path += o.anim + "/";
    o.dn = path + o.dn;

    this.logDebug("view", o);
    o = this.transformParams(o);

    o.cb = this.cacheBust();
    if (typeof utag != "undefined")
        utag.track("view", o);
}

Tracker.prototype.trackClick = function (id, keys) {
    this.updateDatas();

    var o = this.extend(this.convertParamsForDebug(this.metaDatas()), this.commonClick);
    o = this.extend(o, this.convertParamsForDebug(this.linkDatas[id]));
    o = this.convertParamsForDebug(o);

    //replacements
    if (typeof keys != "undefined")
        o = this.mixKeys(o, keys);

    this.logDebug("click", o);
    o = this.transformParams(o);

    o.cb = this.cacheBust();
    if (typeof utag != "undefined")
        utag.track("link", o);
}

Tracker.prototype.cacheBust = function () {
    var str = '';
    for (var i = 0; i < 8; ++i) {
        str += (Math.random() * 10) | 0;
    }
    return str;
}

Tracker.prototype.getCookie = function (name) {
    var pattern = RegExp(name + "=.[^;]*")
    matched = document.cookie.match(pattern)
    if (matched) {
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    else {
        return 'undefined';
    }
}

Tracker.prototype.metaDatas = function () {
    var dataMap = {};
    for (var i in this.metaData) {
        var prop = this.metaData[i];
        if (utag_data != undefined && utag_data[prop] != undefined)
            dataMap[prop] = utag_data[prop];
    }
    return dataMap;
}

Tracker.prototype.convertParamsForDebug = function (params) {
    var map = {
        //metas
        "meta.country": "dispc",
        "meta.language": "displ",
        "meta.page_type": "dt",
        "meta.site_id": "site",
        "meta.account_id": "acc",
        "meta.page_name": "dn",
        "meta.brochure": "broc",
        "meta.animation": "anim",
        "meta.gender": "gen",
        "meta.orientation": "dis",
        "qp.campaign": "campaign",
        "js_page.MODE": "dis",
        "dom.referrer": "dr",
        "js_page.display_sort": "sort",
        //metas
        "country": "dispc",
        "language": "displ",
        "page_type": "dt",
        "site_id": "site",
        "account_id": "acc",
        "page_name": "dn",
        "brochure": "broc",
        "animation": "anim",
        "gender": "gen",
        "orientation": "dis",
        "campaign": "campaign",
        "MODE": "dis",
        "referrer": "dr",
        "display_sort": "sort",
        //other
        "isearch_keyword": "isp",
        "logged_state": "conn",
        "position": "pos",
        "link": "lid",
        "event": "evt",
        "network": "ntw",
        "product_stock": "stk",
        "product_sku": "sku",
        "isearch_rank": "rak",
        "product_lastoption": "ona",
        "product_alloption": "ova",
        "shipping": "ship",
        "display_grid": "mod",
        "product_quantity": "qty",
        "product_price": "prc",
        "order_id": "oid",
        "product_category": "pcat",
        "product_name": "prd",
        "isearch_lastfilter": "fna",
        "isearch_allfilter": "fva",
        "isearch_result": "ino",
        "customer_city": "cuzi",
        "content_name": "cna",
        "content_category": "ccat",
        "content_duration": "tot",
        "content_type": "typ",
        "content_progress": "play",
        "content_tag": "key",
        "sub_total": "otot",
        "customer_country": "cuco",
        "currency": "mu",
        "amt_total": "atot",
        "vat_total": "vtot",
        "content_id": "cid",
        "customer_state": "cust",
        "method_payment": "pay",
        "shipping_date": "shdt",
        "shipping_hour": "shhr",
        "detail": "det",
        "product_availability": "aval",
        "product_hotstamped": "hots",
        "origine": "orig",
        "error": "err",
        "shipping_method": "metd",
        "store_id": "stid",
        "sku_type": "skuty",
        "item_attributes": "attr",
        "callCenterStatus": "ccs",
        "fallback": "fall",
        "product_attributes": "pattr",
        "personality": "pers",
        "device": "dev"
    };
    var ret = {};
    for (var z in params) {
        var p = typeof map[z] != "undefined" ? map[z] : z;
        ret[p] = params[z];
    }

    return ret;
}

Tracker.prototype.transformParams = function (params) {
    var map_rev = {
        "dispc": "meta.country",
        "displ": "meta.language",
        "dt": "meta.page_type",
        "site": "meta.site_id",
        "isp": "isearch_keyword",
        "conn": "logged_state",
        "acc": "meta.account_id",
        "campaign": "qp.campaign",
        "dn": "meta.page_name",
        "pos": "position",
        "lid": "link",
        "evt": "event",
        "ntw": "network",
        "stk": "product_stock",
        "dis": "js_page.MODE",
        "sku": "product_sku",
        "rak": "isearch_rank",
        "ona": "product_lastoption",
        "ova": "product_alloption",
        "ship": "shipping",
        "dr": "dom.referrer",
        "mod": "display_grid",
        "sort": "js_page.display_sort",
        "qty": "product_quantity",
        "prc": "product_price",
        "oid": "order_id",
        "pcat": "product_category",
        "prd": "product_name",
        "fna": "isearch_lastfilter",
        "fva": "isearch_allfilter",
        "ino": "isearch_result",
        "cuzi": "customer_city",
        "cna": "content_name",
        "ccat": "content_category",
        "tot": "content_duration",
        "typ": "content_type",
        "play": "content_progress",
        "key": "content_tag",
        "otot": "sub_total",
        "cuco": "customer_country",
        "mu": "currency",
        "atot": "amt_total",
        "vtot": "vat_total",
        "cid": "content_id",
        "cust": "customer_state",
        "pay": "method_payment",
        "shdt": "shipping_date",
        "shhr": "shipping_hour",
        "det": "detail",
        "broc": "meta.brochure",
        "aval": "product_availability",
        "hots": "product_hotstamped",
        "orig": "origine",
        "err": "error",
        "metd": "shipping_method",
        "stid": "store_id",
        "anim": "meta.animation",
        "skuty": "sku_type",
        "gen": "gender",//meta.gender
        "attr": "item_attributes",
        "ccs": "callCenterStatus",
        "fall": "fallback",
        "pattr": "product_attributes",
        "pers": "personality",
        "dis": "meta.orientation",
        "dev": "device"
    };

    var ret = {};
    for (var z in params) {
        var p = typeof map_rev[z] != "undefined" ? map_rev[z] : z;
        ret[p] = params[z];
    }

    return ret;
}

Tracker.prototype.logDebug = function (type, obj) {
    var tmpObj = this.convertParamsForDebug(obj);
    var str = "Track " + type + "\n";
    for (var z in tmpObj) {
        str += "- " + z + ": " + tmpObj[z] + "\n";
    }

    if (typeof utag != "undefined" && typeof utag.o != "undefined") {
        try {
            var u = utag.o['louisvuitton.convergence'].sender['1'];
            var tag = type == "click" ? u.trackingLinkURI : u.trackingPageURI;
            var index = u.counter++;
            str += u.trackingProtocol + "//" + u.trackingDomain + tag + '?' + u.trackingStatic + '&' + u.stringify(tmpObj) + 'cb=' + new Date().getTime() + '_' + index;
        } catch (e) {

        }
    }
    console.info(str);
}
try {
    console.log(utag_data);
} catch (e) {
    var utag_data;
}
taglibTracker = new Tracker();