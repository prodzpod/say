you = ""
progress = -1
prevMessages = [];
prev = USERS[Math.floor(Math.random() * USERS.length)].split('@');

window.onload = function() {
    let postRandom = () => {
        if (progress > 0) progress *= 1.03;
        let user = USERS[Math.floor(Math.random() * USERS.length)].split('@');
        let _RANDOM = RANDOM.filter(x => !prevMessages.includes(x.init));
        let content = _RANDOM[Math.floor(Math.random() * _RANDOM.length)];
        prevMessages = [content.init, ...prevMessages.slice(0, 4)];
        let res = {
            response: content.response,
            responses: content.responses,
            users: USERS.filter(x => !x.endsWith('@' + user[1])),
            user: content.user,
            self: user,
            prev: prev
        }
        res.other = res.users[Math.floor(Math.random() * res.users.length)].split('@')
        post(res.self[1], res.self[0], content.init.replace('@you', '@' + you).replace('@self', '@' + res.self[1]).replace('@prev', '@' + res.prev[1]).replace('@other', '@' + res.other[1]));
        if (Math.random() < (res.responses / (res.responses + 1.0))) setTimeout(postReply(res), Math.random() * 2000 * Math.max(0.1, 1 - (progress / 2)) + 60);
        setTimeout(postRandom, Math.random() * 5000 + 60);
    };
    let postReply = function (res) { return () => {
        if (progress > 0) progress *= 1.03;
        res.responses--;
        for (let u of res.user.split(',')) switch (u) {
            case '@self':
                res.users = [res.self.join('@')];
                break;
            case '@prev':
                res.users = [res.prev.join('@')];
                break;
            case '@other':
                res.users = [res.other.join('@')];
                break;
            case '!@self':
                res.users = res.users.filter(x => !x.endsWith('@' + res.self[1]));
                break;
            case '!@prev':
                res.users = res.users.filter(x => !x.endsWith('@' + res.prev[1]));
                break;
            case '!@other':
                res.users = res.users.filter(x => !x.endsWith('@' + res.other[1]));
                break;
        }
        let user = res.users[Math.floor(Math.random() * res.users.length)].split('@');
        res.users = res.users.filter(x => !x.endsWith('@' + user[1]));
        let content = res.response[Math.floor(Math.random() * res.response.length)];
        res.users = res.users.filter(x => x !== (content));
        post(user[1], user[0], content.replace('@you', '@' + you).replace('@self', '@' + res.self[1]).replace('@prev', '@' + res.prev[1]).replace('@other', '@' + res.other[1]));
        if (Math.random() < (res.responses / (res.responses + 1.0))) setTimeout(postReply(res), Math.random() * 2000 * Math.max(0.1, 1 - (progress / 2)) + 60);
    }};

    let postCommon = function() {
        if (progress > 0) progress *= 1.03;
        let user = USERS[Math.floor(Math.random() * USERS.length)].split('@');
        let content = RANDOM_COMMON[Math.floor(Math.random() * RANDOM_COMMON.length)];
        post(user[1], user[0], content);
        if (progress > 4) {
            let d = insertElement('div', 'fg', 'black');
            let logo = insertElement('svg', d, 'logo');
            logo.setAttribute('viewBox', "0 0 32 10", 'logo');
            let p = insertElement('path', logo);
            p.setAttribute('d', 'm1 10a1 1 0 000-2 1 1 0 000 2m3 0a1 1 0 010-2l4 0a1 1 0 000-2l-2 0a1 1 0 010-6l4 0a1 1 0 010 2l-4 0a1 1 0 000 2l2 0a1 1 0 010 6m7 0a2 2 0 01-2-2l0-2a2 2 0 012-2l3 0a1 1 0 000-2l-4 0a1 1 0 010-2l4 0a3 3 0 013 3l0 5a2 2 0 01-2 2m-3-4a1 1 0 000 2l2 0a1 1 0 000-2m5-5a1 1 0 012 0l0 2a1 1 0 001 1l2 0a1 1 0 001-1l0-2a1 1 0 012 0l0 7a2 2 0 01-2 2l-5 0a1 1 0 010-2l3 0a1 1 0 000-2l-2 0a2 2 0 01-2-2');
            p.setAttribute('fill', 'white');
            d.innerHTML += ' ';
            setTimeout(() => { window.location.reload(); }, 5000);
            progress = -1;
        }
        setTimeout(postCommon, Math.random() * 3000 * Math.max(0.1, 1 - (progress / 2)) + 60);
    }
    postRandom();
    postCommon();
}

function onkeyregister(event) {
    e('newacc-name').value = e('newacc-name').value.replace(/\W+/g, '');
    if (event.keyCode === 13) register();
}

function register() {
    you = e('newacc-name').value;
    e('newacc-name').value = '';
    if (!you.length || USERS.findIndex(x => x.endsWith('@' + you)) !== -1) return;
    cleanElement('fg');
    setTimeout(function() {
        e('post-content').focus();
    }, 0);
    progress = 0;
}

function postMe() {
    let content = e('post-content').value;
    if (Math.random() < 0.01) content = content.slice(0, -1);
    post(you, '나', content);
    e('post-content').value = '';
    e('post-content').focus();
    progress += 0.05;
    let posts = 6;
    let postFirstTime = function() {
        if (progress > 0) progress *= 1.03;
        posts--;
        let user = USERS[Math.floor(Math.random() * USERS.length)].split('@');
        let content = RANDOM_FIRSTTIME[Math.floor(Math.random() * RANDOM_FIRSTTIME.length)];
        post(user[1], user[0], '@' + you + ' ' + content);
        if (Math.random() < (posts / (posts + 1))) setTimeout(postFirstTime, Math.random() * 2000 + 600);
    }
    if (progress == 0.05) setTimeout(postFirstTime, Math.random() * 2000 + 2000);
    let postMyReply = function() {
        if (progress > 0) progress *= 1.03;
        let user = USERS[Math.floor(Math.random() * USERS.length)].split('@');
        let content = RANDOM_MYREPLY[Math.floor(Math.random() * RANDOM_MYREPLY.length)];
        post(user[1], user[0], '@' + you + ' ' + content);
    }
    if (!content.endsWith('?') && Math.random() < 0.5) setTimeout(postMyReply, Math.random() * 2000 + 2000);
}

function post(author, name, content) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('feed', 'vlist');
    e('feed').prepend(wrapper);
    let wrapper2 = insertElement('div', wrapper, 'hlist');
    if ((progress >= 0 && content.includes('@' + you)) || Math.random() < (progress - 1)) wrapper2.classList.add('ping');
    drawProfile(author, wrapper2);
    let wrapper3 = insertElement('div', wrapper2, ['feed-main', 'vlist']);
    let header = insertElement('div', wrapper3, ['feed-header', 'hlist']);
    if (Math.random() >= progress - 0.2) insertElement('b', header, null, name);
    else if (Math.random() < progress - 0.5) insertElement('b', header, null, '나');
    if (Math.random() >= progress - 0.2) insertElement('c', header, null, '@' + author);
    else if (Math.random() < progress - 0.5) insertElement('c', header, null, '@' + you);
    insertSpacer(header);
    let time = new Date();
    if (Math.random() >= progress - 0.2) insertElement('c', header, null, `Today, ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    let body = insertElement('div', wrapper3, 'feed-content');
    let txt = '';
    let isMention = false;
    if (Math.random() >= progress - 0.2) {
        for (let i = 0; i < content.length; i++) {
            if (!isMention && (content[i] === '@' || content[i] === '#')) {
                isMention = true;
                if (txt.length) insertElement('p', body, null, txt);
                txt = '';
            }
            else if (isMention && /\s/.test(content[i])) {
                isMention = false;
                if (txt.length) insertElement('span', body, null, txt);
                txt = '';
            }
            txt += content[i];
        }
    } else if (Math.random() < progress - 0.5) insertElement('p', body, null, '행복하신가요?')
    if (txt.length) insertElement(isMention ? 'span' : 'p', body, null, txt);
    let footer = insertElement('div', wrapper, ['feed-footer', 'hlist']);
    for (let icon of ["M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z", "M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z", "M503.7 226.2l-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V272.1C132.9 274.3 66.06 312.8 111.4 457.8c5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3c0-152.2 127.4-184.4 288-186.3V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1C514.8 199.4 514.8 216.6 503.7 226.2z"]) {
        let button = insertElement('button', footer, 'feed-icon');
        let svg = insertElement('svg', button);
        svg.setAttribute('viewBox', '0 0 512 512');
        let path = insertElement('path', svg);
        path.setAttribute('d', icon);
        path.setAttribute('fill', (Math.random() < progress - 0.2 || (author === you && icon === "M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z")) ? 'transparent' : 'black');
        switch (icon) {
            case "M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z":
                path.setAttribute('onpointerdown', 'like(this)');
                break;
            case "M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z":
                path.setAttribute('onpointerdown', 'comment("' + author + '")');
                break;
            case "M503.7 226.2l-176 151.1c-15.38 13.3-39.69 2.545-39.69-18.16V272.1C132.9 274.3 66.06 312.8 111.4 457.8c5.031 16.09-14.41 28.56-28.06 18.62C39.59 444.6 0 383.8 0 322.3c0-152.2 127.4-184.4 288-186.3V56.02c0-20.67 24.28-31.46 39.69-18.16l176 151.1C514.8 199.4 514.8 216.6 503.7 226.2z":
                break;
        }
    }
    footer.innerHTML += ' ';
    wrapper.style.height = wrapper.scrollHeight;
    setTimeout(() => { wrapper.style.opacity = 1}, 400);
    if (e('feed').childElementCount > 50) e('feed').removeChild(e('feed').lastChild);
}

function like(el) {
    el.setAttribute('fill', el.getAttribute('fill') === 'black' ? '#44e' : 'black')
}

function comment(str) {
    e('post-content').value += '@' + str + ' ';
}

function drawProfile(name, el) {
    if (typeof(el) === 'string') el = e(el);
    let profile = getProfile(name);
    let svg = document.createElement('svg');
    svg.setAttribute('viewBox', '0 0 8 8');
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
        let r = document.createElement('rect');
        r.setAttribute('x', i);
        r.setAttribute('y', j);
        r.setAttribute('width', 1);
        r.setAttribute('height', 1);
        r.setAttribute('fill', profile.pattern[i][j] ? profile.color[0] : profile.color[1]);
        svg.appendChild(r);
    }
    svg.classList.add('feed-pfp');
    el.appendChild(svg);
    el.innerHTML += ' ' // refresh svg
}

function getProfile(name) {
    const fns = [
        (p, x, y, size) => { return p[y][x] }, 
        (p, x, y, size) => { return p[y][size - x] }, 
        (p, x, y, size) => { return p[x][size - y] }, 
        (p, x, y, size) => { return p[size - y][size - x] }
    ];
    const fn2s = [
        (p, x, y, size) => { return p[y][x] }, 
        (p, x, y, size) => { return p[size - y][x] }, 
        (p, x, y, size) => { return p[size - x][y] }, 
        (p, x, y, size) => { return p[size - y][size - x] }
    ];
    let p = [[[1,0],[1,0]],[[1,0],[0,0]],[[1,1],[0,0]],[[1,0],[0,1]]][bits(name, 0, 2)];
    if (Math.random() < progress) p = [[1,1],[1,1]];
    let fn = fns[bits(name, 2, 4)];
    let fn2 = fn2s[bits(name, 4, 6)];
    let p2 = [[fn(p, 0, 0, 1), fn(p, 1, 0, 1)],[fn(p, 0, 1, 1), fn(p, 1, 1, 1)]];
    p = [
        [p[0][0], p[1][0], p2[0][0], p2[1][0]], 
        [p[0][1], p[1][1], p2[0][1], p2[1][1]], 
        [fn2(p, 0, 0, 1), fn2(p, 1, 0, 1), fn2(p2, 0, 0, 1), fn2(p2, 1, 0, 1)],
        [fn2(p, 0, 1, 1), fn2(p, 1, 1, 1), fn2(p2, 0, 1, 1), fn2(p2, 1, 1, 1)]
    ];
    fn = fns[bits(name, 6, 8)];
    fn2 = fn2s[bits(name, 8, 10)];
    p2 = [
        [fn(p, 0, 0, 3), fn(p, 1, 0, 3), fn(p, 2, 0, 3), fn(p, 3, 0, 3)],
        [fn(p, 0, 1, 3), fn(p, 1, 1, 3), fn(p, 2, 1, 3), fn(p, 3, 1, 3)],
        [fn(p, 0, 2, 3), fn(p, 1, 2, 3), fn(p, 2, 2, 3), fn(p, 3, 2, 3)],
        [fn(p, 0, 3, 3), fn(p, 1, 3, 3), fn(p, 2, 3, 3), fn(p, 3, 3, 3)],
    ];
    p = [
        [p[0][0], p[1][0], p[2][0], p[3][0], p2[0][0], p2[1][0], p2[2][0], p2[3][0]],
        [p[0][1], p[1][1], p[2][1], p[3][1], p2[0][1], p2[1][1], p2[2][1], p2[3][1]],
        [p[0][2], p[1][2], p[2][2], p[3][2], p2[0][2], p2[1][2], p2[2][2], p2[3][2]],
        [p[0][3], p[1][3], p[2][3], p[3][3], p2[0][3], p2[1][3], p2[2][3], p2[3][3]],
        [fn2(p,0,0,3),fn2(p,1,0,3),fn2(p,2,0,3),fn2(p,3,0,3),fn2(p2,0,0,3),fn2(p2,1,0,3),fn2(p2,2,0,3),fn2(p2,3,0,3)],
        [fn2(p,0,1,3),fn2(p,1,1,3),fn2(p,2,1,3),fn2(p,3,1,3),fn2(p2,0,1,3),fn2(p2,1,1,3),fn2(p2,2,1,3),fn2(p2,3,1,3)],
        [fn2(p,0,2,3),fn2(p,1,2,3),fn2(p,2,2,3),fn2(p,3,2,3),fn2(p2,0,2,3),fn2(p2,1,2,3),fn2(p2,2,2,3),fn2(p2,3,2,3)],
        [fn2(p,0,3,3),fn2(p,1,3,3),fn2(p,2,3,3),fn2(p,3,3,3),fn2(p2,0,3,3),fn2(p2,1,3,3),fn2(p2,2,3,3),fn2(p2,3,3,3)],
    ];
    let c = (Math.random() < progress - 0.5) ? 'transparent' : HSVtoRGB(bits(name, 10, 18) / 256.0, 0.3, 1);
    let c2 = (Math.random() < progress - 0.5) ? 'transparent' : HSVtoRGB(bits(name, 18, 26) / 256.0, 0.3, 1);
    if (bits(name, 26, 27)) p = [p[7], ...p.slice(0, 7)];
    if (bits(name, 27, 28)) for (let i = 0; i < p.length; i++) p[i] = [p[i][7], ...p[i].slice(0, 7)];
    return {
        pattern: p,
        color: [c, c2]
    };
}

/* UTILS */

function e(id) { return document.getElementById(id); }

function cleanElement(el) { if (typeof(el) == 'string') el = e(el); while (el?.hasChildNodes()) el.removeChild(el.firstChild); }

function checkEnter(event, func, ...args) {
    if (event.keyCode === 13) func(...args);
}

function insertElement(type, parent, classList, html) {
    let el = document.createElement(type);
    if (![undefined, null, false].includes(html)) el.innerHTML = html;
    if (classList) {
        if (typeof(classList) == 'string') classList = [classList];
        if (classList.length) el.classList.add(...classList);
    } 
    if (parent) {
        if (typeof(parent) == 'string') parent = e(parent);
        if (parent) parent.appendChild(el);
    }
    return el;
}

function insertSpacer(parent) { return insertElement('div', parent, ['spacer']); }

function resizeArea(el) {
    if (typeof(el) == 'string') el = e(el);
    if (el) {
        el.style.height = "1px";
        el.style.height = (25+el.scrollHeight)+"px";
    }
}

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < 32; i++) {
        chr   = this.charCodeAt(i % this.length);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

function bits(str, a, b) {
    return ((str.hashCode() >>> 0) >> Math.min(a, b)) & ((1 << (Math.abs(a - b))) - 1);
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return `#${col(r)}${col(g)}${col(b)}`;
}

function col(x) { return Math.round(x * 255).toString(16).padStart(2, '0'); }