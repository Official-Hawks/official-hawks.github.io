u = document.getElementById("findipurl");
h = "Free users please don't remove our link. Get <a href='https://www.find-ip.net/ip-script' target='_blank'>the code</a> again.";
if (u && (a = u.querySelector("a")) && (r = a.href) && -1 != r.indexOf("find-ip.net")) {
    h =
        '<style>#findipinfo div{display:inline-block;margin: 0 6px 0 0}#findipinfo img{box-shadow: 1px 1px 3px #666;border:0;display:inline}a#findipinfo{display:block;width: 178px;text-align:center;color: #444;text-decoration:none;background:#fcfcfc;padding:10px;border: 1px solid #e5e5e5;overflow:hidden;line-height:170%;box-sizing:content-box;}a#findipinfo:hover{background:#fafafa;color:#111;}.findiplink,.findiptitle{padding:2px 8px;text-align:right;width: 182px;font-size:11px;border: 1px solid #e5e5e5;overflow: hidden;line-height:150%;color:#555;background:#fff;box-sizing:content-box;}.findiplink{border-top:0;}.findiptitle{border-bottom:0;text-align:center;}.findiplink a{text-decoration:none;}</style><a id="findipinfo" href="http://www.find-ip.net/" target="_blank"><div>Your IP: <b>74.91.30.106</b></div><div>Country: <b>United States</b> <img src="//api.find-ip.net/flags/us.png" alt="(US)" /></div><div>Region: <b>unknown</b></div><div>City: <b>unknown</b></div><div>Language: <b>en-US</b></div><div>Browser: <b>unknown</b></div><div>System: <b>unknown</b></div></a>';
}
if (!u) {
    u = document.currentScript;
}
w = document.getElementById("findipwidget");
if (!w) {
    w = document.createElement("div");
    u.parentNode.insertBefore(w, u);
}
w.innerHTML = h;
