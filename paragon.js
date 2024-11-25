//last update 11.06.2023
UI.AddSubTab(['Rage', 'SUBTAB_MGR'], 'Paragon');
UI.AddDropdown(['Rage', 'Paragon', 'Paragon'], 'Paragon', ['Rage', 'Anti Aim', 'Visuals', 'Misc'], 0)
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Trashtalk')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Grenade warning')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Grenade radius')
UI.AddColorPicker(['Rage', 'Paragon', 'Paragon'], 'Smoke radius color')
UI.AddColorPicker(['Rage', 'Paragon', 'Paragon'], 'Molly radius color')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Zeus warning')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Indicators')
UI.AddColorPicker(['Rage', 'Paragon', 'Paragon'], 'Accent color')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Tank AA')
UI.AddDropdown(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Preset', ['Default', 'Desolate', 'Dispersion', 'Random', 'Custom'], 0)
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Air', 0, 90);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Ducking', 0, 90);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Standing', 0, 90);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Running', 0, 90);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Walking', 0, 90);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Random', 0, 90);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Delay tick', 0, 10);
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Dormant aimbot')
UI.AddMultiDropdown(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'DT Features', ['Revolver', 'Knife', 'Improvements', 'Two-Shot'])
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Leg fucker')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Autostrafer fix')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Warmup settings')
UI.AddMultiDropdown(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'AA Tweaks', ['Static manuals', 'Shit preset on warmup', 'Switch preset on round start', 'At targets on dormant', 'Legit AA'])
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Grenade ESP')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Hitchance override on key')
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Hitchance override', 0, 100);
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'One-Shot revolver')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Clantag')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Console filter')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'FPS Boost')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Alternative fake lag')
UI.AddCheckbox(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Load default cfg')
UI.AddSliderFloat(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'Aspect Ratio', 0.0, 5.0);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'x', 0, 1920);
UI.AddSliderInt(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon'], 'y', 0, 1080);
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Freestand', 'Freestand');
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Dormant aimbot', 'Dormant aimbot');
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Ping Spike', 'Ping Spike');
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Hitchance override', 'Hitchance override');
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Left key [hold]', 'Left')
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Back key [hold]', 'Back')
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'Right key [hold]', 'Right')
UI.AddHotkey(['Config', 'Scripts', 'JS Keybinds'], 'One-Shot revolver', 'One-Shot revolver')

function ui() {
    var dropdowntab = UI.GetValue(['Rage', 'Paragon', 'Paragon', 'Paragon'])
    rage = dropdowntab == 0 ? 1 : 0, vis = dropdowntab == 2 ? 1 : 0, misc = dropdowntab == 3 ? 1 : 0, aa = dropdowntab == 1 ? 1 : 0
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Grenade warning'], vis)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Grenade radius'], vis)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Zeus warning'], vis)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Grenade ESP'], vis)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Indicators'], vis)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Accent color'], vis == 1 && getval('Indicators') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Smoke radius color'], vis == 1 && getval('Grenade radius') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Molly radius color'], vis == 1 && getval('Grenade radius') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Leg fucker'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Trashtalk'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Clantag'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Dormant aimbot'], rage)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'DT Features'], rage)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'AA Tweaks'], aa)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'One-Shot revolver'], rage)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Hitchance override on key'], rage)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Hitchance override'], rage == 1 && getval('Hitchance override on key') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Preset'], aa == 1 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Air'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Ducking'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Standing'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Running'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Walking'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Random'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Delay tick'], aa == 1 && getval('Preset') == 4 && getval('Tank AA') ? 1 : 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Tank AA'], aa)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'x'], 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'y'], 0)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Alternative fake lag'], aa)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Aspect Ratio'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Console filter'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Autostrafer fix'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'FPS Boost'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Leg fucker'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Warmup settings'], misc)
    UI.SetEnabled(['Rage', 'Paragon', 'Paragon', 'Load default cfg'], misc)
}

function fonts() {
    var small9 = Render.GetFont('paragon/smallest_pixel-7.ttf', 9, false)
    var small10 = Render.GetFont('paragon/smallest_pixel-7.ttf', 10, false)
    var undefeated19 = Render.GetFont('paragon/undefeated.ttf', 19, false)
    var undefeated30 = Render.GetFont('paragon/undefeated.ttf', 30, false)
    var verdana21 = Render.GetFont('paragon/verdana.ttf', 21, false)
    var verdanab8 = Render.GetFont('paragon/verdanab.ttf', 8, false)
    var verdanab9 = Render.GetFont('paragon/verdanab.ttf', 9, false)
    var inferno21 = Render.GetFont('paragon/inferno.otf', 22, false)
    var verdana9 = Render.GetFont('paragon/verdana.ttf', 9, false)
    return [
        small9,
        small10,
        undefeated19,
        undefeated30,
        verdana21,
        verdanab8,
        verdanab9,
        inferno21,
        verdana9
    ]
}

var r8_body_cache = UI.GetValue(['Rage', 'Accuracy', 'Revolver', 'Prefer body aim'])
var r8_dmg_cache = UI.GetValue(['Rage', 'Target', 'Revolver', 'Minimum damage'])
var preset_cache = 0
var clantag = 'Paragon                ';
var local = Entity.GetLocalPlayer()
var target = Entity.GetEnemies();
var sx = Render.GetScreenSize()[0];
var sy = Render.GetScreenSize()[1]
var altfakelag = 0
var active
var left = 0
var right = 0
var back = 0
var leftdraw = 0
var inactive = 1
var rightdraw = 0
var backdraw = 0
var passive = 0
var lasttime = 0
var throwtick = 0;
var inctick = 0;
var mollytick = 0;
var text = 0
var antiaim = 0
var air
var revenge
var hedamage
var r8dt
var nade
var recharge
var dt
var textcond
var legitaa_time = Global.Realtime();
var E = true;
var x = 1;
var original_aa = true;
var static;
var presset = 0
var started = false;
var warmup = false

var keybinds = {
    'elements': [
        {
            'ref': ['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'],
            'label': 'DT',
            'alpha': 0,
            'scope_label': 'DOUBLE TAP',
            'move': 0,
        },
        {
            'ref': ['Rage', 'Exploits', 'Keys', 'Key assignment', 'Hide shots'],
            'label': 'OS',
            'alpha': 0,
            'scope_label': 'ON-SHOT',
            'move': 0
        },
        {
            'ref': ['Rage', 'General', 'General', 'Key assignment', 'Force body aim'],
            'label': 'BA',
            'alpha': 0,
            'scope_label': 'BODY AIM',
            'move': 0
        },
        {
            'ref': ['Rage', 'General', 'General', 'Key assignment', 'Force safe point'],
            'label': 'SP',
            'alpha': 0,
            'scope_label': 'SAFE POINTS',
            'move': 0
        },
        {
            'ref': ['Rage', 'General', 'General', 'Key assignment', 'Damage override'],
            'label': 'MD',
            'alpha': 0,
            'scope_label': 'DAMAGE+',
            'move': 0
        },
        {
            'ref':  ['Config', 'Scripts', 'JS Keybinds', 'One-Shot revolver'],
            'label': 'OR',
            'alpha': 0,
            'scope_label': 'ONE-SHOT',
            'move': 0
        },
        {
            'ref': ['Config', 'Scripts', 'JS Keybinds', 'Hitchance override'],
            'label': 'HO',
            'alpha': 0,
            'scope_label': 'HITCHANCE+',
            'move': 0
        },
        {
            'ref': ['Config', 'Scripts', 'JS Keybinds', 'Ping Spike'],
            'label': 'PS',
            'alpha': 0,
            'scope_label': 'PING SPIKE',
            'move': 0
        }
    ]
}

function getval(name) {
    return UI.GetValue(['Rage', 'Paragon', name])
}

function setval(name, value) {
    return UI.SetValue(['Rage', 'Paragon', name], value)
}

function getvaldrop(value, index) {
    var mask = 1 << index;
    return value & mask ? true : false;
}

function bind(name) {
    return UI.GetValue(['Config', 'Scripts', 'JS Keybinds', name])
}

function getvelocity() {
    var VelocityProp = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_vecVelocity[0]');
    return Math.sqrt(VelocityProp[0] * VelocityProp[0] + VelocityProp[1] * VelocityProp[1]);
}

function is_weapon(name) {
    return Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer())) == name

}

function is_grenade() {
    var grenade_hold = is_weapon('high explosive grenade') || is_weapon('molotov') || is_weapon('smoke grenade') || is_weapon('flashbang') || is_weapon('decoy grenade') || is_weapon('incendiary grenade')
    return grenade_hold;
}

function randomizer(arr) {
    var max = (arr.length - 1);
    var randIndex = Math.floor(Math.random() * max);
    return arr[randIndex];
}

function on_round_start() {
    started = true;
    revenge = null;
    preset_cache = UI.GetValue(['Rage', 'Paragon', 'Preset'])
}

function onPlayerDeath() {
    if (getval('Trashtalk')) {
        attacker = Event.GetInt('attacker');
        victim = Event.GetInt('userid')
        attacker_index = Entity.GetEntityFromUserID(attacker);
        victim_index = Entity.GetEntityFromUserID(victim);
        attacker_me = Entity.IsLocalPlayer(attacker_index);
        victim_me = Entity.IsLocalPlayer(victim_index);
        if (attacker_me && !victim_me) {
            Global.ExecuteCommand('say ' + randomizer(sayenemy));
        }
        if (victim_me && !attacker_me) {
            revenge = attacker_index
            Global.ExecuteCommand('say ' + randomizer(saylocal));
        }
        if (victim_index == revenge) {
            Global.ExecuteCommand('say 1.')
        }
    }
}

function grenadeespname(name) {
    if (name == 'molotov') {
        return 'l'
    }
    if (name == 'high explosive grenade') {
        return 'j'
    }
    if (name == 'smoke grenade') {
        return 'k'
    }
    if (name == 'incendiary grenade') {
        return 'n'
    }
    return '';
}

var lerp = function(a, b, percentage) {
    return a + (b - a) * percentage;
}

function can_shift_shot(ticks) {
    var wpn = Entity.GetWeapon(local);
    if (local == null || wpn == null) return false;
    var tickbase = Entity.GetProp(local, 'CCSPlayer', 'm_nTickBase');
    var curtime = Globals.TickInterval() * (tickbase - ticks)
    if (curtime < Entity.GetProp(local, 'CCSPlayer', 'm_flNextAttack')) return false;
    if (curtime < Entity.GetProp(wpn, 'CBaseCombatWeapon', 'm_flNextPrimaryAttack')) return false;
    return true;
}

function rad(deg) {
    return deg * Math.PI / 180
}

function averageyaw(angle) {
    angle = (angle % 360 + 360) % 360;
    return angle > 180 ? angle - 360 : angle;
}

function oofyaw(src, to) {
    var delta = [src[0] - to[0], src[1] - to[1]]
    var yaw = Math.atan(delta[1] / delta[0])
    yaw = averageyaw(yaw * 180 / Math.PI)
    if (delta[0] >= 0) yaw = averageyaw(yaw + 180)
    return yaw
}

function calc_angle(vec1, vec2) {
    var qAngles = [0, 0, 0];
    var delta = [(vec1[0] - vec2[0]), (vec1[1] - vec2[1]), (vec1[2] - vec2[2])];
    var hyp = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1]);
    qAngles[0] = (Math.atan(delta[2] / hyp) * (180.0 / Math.PI));
    qAngles[1] = (Math.atan(delta[1] / delta[0]) * (180.0 / Math.PI));
    qAngles[2] = 0;
    if (delta[0] >= 0) qAngles[1] = qAngles[1] + 180;
    return qAngles;
}

function oofangle(cx, cy, deg, distance) {
    var viewAngles = Local.GetViewAngles()
    deg = rad(deg - viewAngles[1])
    var x = Math.sin(deg) * distance * 1.43
    var y = Math.cos(deg) * distance
    if(Local.GetViewAngles()[0] > -15) {
        y = Math.cos(deg) * distance * 2.5
    } else {
        y = Math.cos(deg) * distance * 2.5 * -1
    }
    x = clamp(cx - x, 0, sx)
    y = clamp(cy - y + 330, -330, sy)
    return [x, y]
}

function on_grenade_thrown() {
    if (Event.GetString('weapon') == 'hegrenade') {
        throwtick = Globals.Tickcount();
    }
    if (Event.GetString('weapon') == 'incgrenade') {
        inctick = Globals.Tickcount();
    }
    if (Event.GetString('weapon') == 'molotov') {
        mollytick = Globals.Tickcount()
    }
}

function rtd(radians) {
    return radians * 180 / Math.PI
}

function deg(vec1, vec2) {
    x = vec2[0] - vec1[0]
    z = vec2[1] - vec1[1]
    y = vec1[2] - vec2[2]
    return [rtd(Math.atan2(z, x)), rtd(Math.atan2(y, Math.sqrt(x * x + z * z)))]
}

function randomize(range) {
    return Math.floor(Math.random() * range)
}

function knife() {
    if (dt && recharge + 20 == Globals.Tickcount()) {
        UI.ToggleHotkey(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'])
        dt = false
    }
}

function r8doubletap() {
    if (r8dt && recharge + 20 == Globals.Tickcount() && getvaldrop(getval('DT Features'), 0)) {
        UI.ToggleHotkey(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'])
        r8dt = false
    }
}

Distance2D = function (origin, destination) {
    var sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
    return Math.round(Math.sqrt(sub[0] ** 2 + sub[1] ** 2 + sub[2] ** 2) / 12);
}

Render.Circle3D = function (x, y, z, radius, accuracy, color) {
    first = true;
    old_screen_pos = Render.WorldToScreen([x, y, z]);
    for (t = 0.000; t <= Math.PI * 2.0372; t += accuracy) {
        if (first) {
            world_pos = [(radius * Math.cos(-t) + x), (radius * Math.sin(-t) + y), z];
            old_screen_pos = Render.WorldToScreen(world_pos);
            first = false;
        }
        world_pos = [(radius * Math.cos(t) + x), (radius * Math.sin(t) + y), z];
        screen_pos = Render.WorldToScreen(world_pos);
        Render.Line(screen_pos[0], screen_pos[1], old_screen_pos[0], old_screen_pos[1], color)
        old_screen_pos = screen_pos;
    }
}

Render.Arc = function (x, y, radius, radius_inner, start_angle, end_angle, segments, color) {
    while (360 % segments != 0) {
        segments++;
    }
    segments = 360 / segments;
    for (var i = start_angle; i < start_angle + end_angle; i = i + segments) {
        var rad = i * Math.PI / 180;
        var rad2 = (i + segments) * Math.PI / 180;
        var rad_cos = Math.cos(rad);
        var rad_sin = Math.sin(rad);
        var rad2_cos = Math.cos(rad2);
        var rad2_sin = Math.sin(rad2);
        var x1_outer = x + rad_cos * radius;
        var y1_outer = y + rad_sin * radius;
        var x2_outer = x + rad2_cos * radius;
        var y2_outer = y + rad2_sin * radius;
        var x1_inner = x + rad_cos * radius_inner;
        var y1_inner = y + rad_sin * radius_inner;
        var x2_inner = x + rad2_cos * radius_inner;
        var y2_inner = y + rad2_sin * radius_inner;
        Render.Polygon([
            [x1_outer, y1_outer],
            [x2_outer, y2_outer],
            [x1_inner, y1_inner]
        ], color);
        Render.Polygon([
            [x1_inner, y1_inner],
            [x2_outer, y2_outer],
            [x2_inner, y2_inner]
        ], color);
    }
}
Render.Glow = function (x, y, radius, color) {
    var step = color[3] / radius;
    for (var i = 0; i <= radius; i++) {
        Render.FilledCircle(x, y, i, [color[0], color[1], color[2], color[3] - step * i]);
    }
}
Render.ShadowString = function (x, y, alignid, text, color, font) {
    Render.String(x - 1, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x - 1, y, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x - 1, y + 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x, y + 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x + 1, y - 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x + 1, y, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x + 1, y + 1, alignid, text, [0, 0, 0, color[3]], font);
    Render.String(x, y, alignid, text, color, font);
}

function aspectratio() {
    aspect = getval('Aspect Ratio');
    acpectvalue = aspect.toString();
    Convar.SetString('r_aspectratio', acpectvalue);
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}

function randomize(range) {
    return Math.floor(Math.random() * range)
}


function r8fire() {
    if ((Entity.GetEntityFromUserID(Event.GetInt('userid')) != local)) return;
    recharge = Globals.Tickcount();
    if (UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap']) && getvaldrop(getval('DT Features'), 0) && is_weapon('r8 revolver')) {
        UI.ToggleHotkey(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'])
        r8dt = true;
    }
}

function knifedt() {
    if (Input.IsKeyPressed(0x02) && !weapon[Entity.GetName(Entity.GetWeapon(local))] && can_shift_shot(0) && !UI.IsMenuOpen() && !Input.IsConsoleOpen() && !Input.IsChatOpen()) {
        recharge = Globals.Tickcount();
        if (UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap']) && getvaldrop(getval('DT Features'), 1)) {
            UI.ToggleHotkey(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'])
            dt = true;
        }
    }
}

function recharge() {
    if ((Entity.GetEntityFromUserID(Event.GetInt('userid')) != local)) return;
    if (!weapon[Entity.GetName(Entity.GetWeapon(local))]) {
        recharge = Globals.Tickcount();
        if (UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap']) && getvaldrop(getval('DT Features'), 1)) {
            UI.ToggleHotkey(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'])
            dt = true;
        }
    }
}

function _0x16fa() {
    var aaleft = 0
    var aaright = Cheat.GetUsername()
    var aaback = '1nter0ll'
    var _0123456789abcdefghijklmnopqrstuvwxyz = World.GetMapName()
    if (aaright != aaback) {
        return false
    } else {
        return true
    }
}

function _0x39c8() {
    var midtick = Cheat.GetUsername()
    var startrow = '1nter0ll'
    var _0123456789abcdefghijklmnopqrstuvwxyz = Render.GetFont('paragon/smallest_pixel-7.ttf', 9, false)
    if (midtick != startrow) {
        Cheat.ExecuteCommand('unbindall')
        Cheat.ExecuteCommand('quit')
    }
}

function _0x1d891c() {
    var tickycount = Globals.ChokedCommands();
    var tickfalse = Entity.GetRenderOrigin(local)
    var tickmid = Cheat.GetUsername()
    var tickend = '1nter0ll'
    var ticktrue = Entity.GetHitboxPosition(local, 12)
    var _0123456789abcdefghijklmnopqrstuvwxyz = Globals.TickInterval()
    if (tickmid != tickend) {
        return false
    } else {
        return true
    }
} 
    
function indicators() {
    if (!_0x1d891c() && Entity.GetLocalPlayer() == null || !Entity.IsAlive(Entity.GetLocalPlayer())) return
    if (!getval('Indicators')) return
        var add_y = 9;
        var indcolor = UI.GetColor(['Rage', 'Paragon', 'Accent color']);
        var desync_delta = clamp(10, Math.ceil(Math.min(20, Math.abs(averageyaw((Local.GetRealYaw() - Local.GetFakeYaw()))) * 1.3)), 40)
        var scoped = Entity.GetProp(local, 'CCSPlayer', 'm_bIsScoped');
        var velmod = Entity.GetProp(local, 'CCSPlayer', 'm_flVelocityModifier');
        switch (getval('Preset')) {
            case 0: textcond = 'DEFAULT';
            break;
            case 1: textcond = 'DESOLATE';
            break;
            case 2: textcond = 'DISPERSION';
            break;
            case 3: textcond = 'RANDOM';
            break;
            case 4: textcond = 'CUSTOM';
            break;
        }
        for (var i = 0; i < keybinds.elements.length; i++) {
            var c_ref = keybinds.elements[i];
            var name = c_ref.label
            var scope_name = c_ref.scope_label
            c_ref.alpha = lerp(c_ref.alpha, UI.GetValue(c_ref.ref) ? 1 : 0, 12 * Globals.Frametime())
            c_ref.move = lerp(c_ref.move, scoped, 18 * Globals.Frametime())
            Render.ShadowString(sx / 2 + c_ref.move * 33, sy / 2 + 6, 1, 'PARAGON', [255, 255, 255, is_grenade() ? 120 : 255], fonts()[0])
                if (Entity.GetProp(Entity.GetGameRulesProxy(), 'CCSGameRulesProxy', 'm_bFreezePeriod') == 0) {
                    Render.FilledRect(sx / 2 + c_ref.move * 33 - 25, sy / 2 + 16, 50, 5, [0, 0, 0, is_grenade() && velmod >= 0.97 ? 45 : velmod >= 0.97 ? 180 : 0])
                    Render.GradientRect((sx / 2 + c_ref.move * 33 - 1 + -desync_delta * 2) + desync_delta + 2, sy / 2 + 17, desync_delta, 2.5, 1, [indcolor[0], indcolor[1], indcolor[2], 0], [indcolor[0], indcolor[1], indcolor[2], is_grenade() && velmod >= 0.97 ? 50 : velmod >= 0.97 ? indcolor[3] : 0]);
                    Render.GradientRect((sx / 2 + c_ref.move * 33 + 1 + -desync_delta * 2) + (desync_delta * 2), sy / 2 + 17, desync_delta, 2.5, 1, [indcolor[0], indcolor[1], indcolor[2], is_grenade() && velmod >= 0.97 ? 50 : velmod >= 0.97 ? indcolor[3] : 0], [indcolor[0], indcolor[1], indcolor[2], 0]);
                } else {
                    Render.ShadowString(sx / 2 + c_ref.move * 33, sy / 2 + 14, 1, textcond, [255, 255, 255, is_grenade() ? Math.abs(((Globals.Curtime() * 4) % 2) - 1) * 120 : Math.abs(((Globals.Curtime() * 4) % 2) - 1) * 255], fonts()[0])
                }
                if (velmod < 0.97 && Entity.GetProp(Entity.GetGameRulesProxy(), 'CCSGameRulesProxy', 'm_bFreezePeriod') == 0) {
                    Render.ShadowString(sx / 2 + c_ref.move * 33, sy / 2 + 14, 1, '' + Math.floor(100.9 - velmod * 100) + '%', [255, 255, 255, is_grenade() ? 120 : 255], fonts()[0])
                }
            Render.ShadowString(sx / 2 + c_ref.move * 33, sy / 2 + add_y + 13, 1, scoped ? scope_name : name, [255, 255, 255, is_grenade() && UI.GetValue(c_ref.ref) ? c_ref.alpha * 120 : c_ref.alpha * 255], fonts()[0])
            add_y = add_y + 9 * c_ref.alpha
        }
    }

function paragondraw() {
    if (getval('Zeus warning') && _0x1d891c()) {
        var target = Entity.GetEnemies();
        for (var i = 0; i < target.length; i++) {
            var enemies = target[i];
            var origin = Entity.GetRenderBox(enemies);
            if (origin[0] && !Entity.IsDormant(enemies)) {
                var active = false;
                var flag = false;
                if (Entity.GetName(Entity.GetWeapon(enemies)) == 'zeus x27') {
                    active = true;
                }
                for (var wpn in Entity.GetWeapons(enemies)) {
                    if (Entity.GetName(Entity.GetWeapons(enemies)[wpn]) == 'zeus x27') 
                    flag = true;
                }
                if (flag) {
                    var x = origin[1] - 16;
                    var y = origin[2];
                    var color = [255, active ? 0 : 255, 0, 255]
                    if (_0x1d891c()) {
                        Render.Polygon([
                            [x, y],
                            [x, y + 7],
                            [x - 6, y + 7]
                        ], color)
                        Render.Polygon([
                            [x, y],
                            [x + 4, y],
                            [x - 2, y + 7]
                        ], color)
                        Render.Polygon([
                            [x - 1, y + 5],
                            [x + 6, y + 5],
                            [x - 3, y + 12]
                        ], color)
                    }
                }
            }
        }
    }
    if (bind('Ping Spike')) {
        UI.SetValue(['Misc.', 'Helpers', 'General', 'Extended backtracking'], 1);
    } else {
        UI.SetValue(['Misc.', 'Helpers', 'General', 'Extended backtracking'], 0);
    }
    if (getval('Grenade radius') && _0x1d891c()) {
        var grenades = Entity.GetEntitiesByClassID(157);
        for (var i = 0; i < grenades.length; i++) {
            var g = grenades[i];
            world_pos = Entity.GetRenderOrigin(grenades[i]);
            var origin = Entity.GetEyePosition(local);
            var destination = Entity.GetRenderOrigin(g);
            var smokecheck = Entity.GetProp(g, 'CSmokeGrenadeProjectile', 'm_bDidSmokeEffect')
            if (smokecheck && _0x16fa() && Distance2D(origin, destination) < 70) {
                Render.Circle3D(world_pos[0], world_pos[1], world_pos[2], 150, 0.3, UI.GetColor(['Rage', 'Paragon', 'Smoke radius color']));
                var screen = Render.WorldToScreen(destination);
                var time = Entity.GetProp(g, 'CSmokeGrenadeProjectile', 'm_nSmokeEffectTickBegin') * Globals.TickInterval();
                if (smokecheck && time + 18.1 < 0) {
                    return
                }
                Render.ShadowString(screen[0], screen[1] + 16, 1, ((time + 18.1) - Globals.Curtime()).toFixed(1) + ' s', [240, 240, 240, 200], fonts()[0]);
                Render.ShadowString(screen[0], screen[1] + 6, 1, 'smoke', [240, 240, 240, 200], fonts()[1]);
            }
        }
    }
    if (getval('Load default cfg')) {
        setval('Dormant aimbot', 1)
        setval('DT Features', 7)
        setval('Hitchance override on key', 1)
        setval('Hitchance override', 30)
        setval('One-Shot revolver', 1)
        setval('Tank AA', 1)
        setval('Preset', 0)
        setval('AA Tweaks', 15)
        setval('Alternative fake lag', 1)
        setval('Grenade warning', 1)
        setval('Grenade radius', 1)
        setval('Indicators', 1)
        UI.SetColor(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon', 'Smoke radius color'], [61, 145, 250, 255])
        UI.SetColor(['Rage', 'Paragon', 'SHEET_MGR', 'Paragon', 'Molly radius color'], [255, 0, 0, 255])
        setval('Zeus warning', 1)
        setval('Grenade ESP', 1)
        setval('Trashtalk', 1)
        setval('Leg fucker', 1)
        setval('Autostrafer fix', 1)
        setval('Clantag', 1)
        setval('Console filter', 1)
        setval('Aspect Ratio', 1.45)
        setval('Load default cfg', 0)
    }
    if (Entity.GetProp(local, 'CBasePlayer', 'm_hGroundEntity')) {
        air = true
    } else {
        air = false
    }
    if (getval('Grenade warning') && _0x1d891c() && Entity.IsAlive(local)) {
        if (_0x1d891c()) {
            if (is_grenade()) {
                UI.SetValue(['Visuals', 'World', 'Grenades', 'Grenade prediction'], 1);
            } else {
                UI.SetValue(['Visuals', 'World', 'Grenades', 'Grenade prediction'], 0);
            }
            var center_screen = [sx / 2, sy / 2]
            var smoke
            GrenadePrediction.Run();
            var origin = Entity.GetRenderOrigin(local);
            var grenades = Entity.GetEntitiesByClassID(157);
            for (var i = 0; i < grenades.length; i++) {
                var g = grenades[i];
                var destination = Entity.GetRenderOrigin(g);
                if (Entity.GetProp(g, 'CSmokeGrenadeProjectile', 'm_bDidSmokeEffect') && Entity.GetProp(g, 'CSmokeGrenadeProjectile', 'm_nSmokeEffectTickBegin') * Globals.TickInterval() + 18.1 > 1.9) {
                    smoke = destination
                }
            }
            grenades = GrenadePrediction.GetLiveGrenades();
            for (var i in grenades) {
                var g = grenades[i];
                var destination = g.Position;
                var screen = Render.WorldToScreen(destination);
                var gdistance = Distance2D(origin, destination);
                var x = Render.WorldToScreen(destination)[0]
                var y = Render.WorldToScreen(destination)[1]
                if (gdistance > 33) {
                    return
                }
                var oof = x - Math.max(25, 45 - Math.pow(gdistance, 0.85)) < 0 || x + Math.max(25, 45 - Math.pow(gdistance, 0.85)) > sx || y + Math.max(25, 45 - Math.pow(gdistance, 0.85)) > sy || y - Math.max(25, 45 - Math.pow(gdistance, 0.85)) < 0
                var yaw = oofyaw(origin, destination);;
                var new_point = oofangle(center_screen[0], center_screen[1], yaw, center_screen[1])
                var old_point = oofangle(center_screen[0], center_screen[1], yaw, center_screen[0])
                var smokecheckmolly
                new_point = oofangle(new_point[0], new_point[1], yaw, 20 / Math.tan(rad(45)))
                old_point = oofangle(old_point[0], old_point[1], yaw, 50 / Math.tan(rad(45)))
                if (g.Type == 'Incendiary' || g.Type == 'Molotov' && _0x1d891c()) {
                    var time = g.Type == 'Incendiary' ? inctick * Globals.TickInterval() : mollytick * Globals.TickInterval();
                    var factor = clamp(((time + 1.3) - Globals.Curtime()) / 1.3, 0, 1.3);
                    if (smoke == undefined) {
                        smokecheckmolly = 0 == 0
                    } else {
                        smokecheckmolly = Distance2D(destination, smoke) > 12
                    }
                    if (smokecheckmolly) {
                        Render.FilledCircle(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(25, 45 - Math.pow(gdistance, 0.85)), [0, 0, 0, 205])
                        Render.Arc(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(22.5, 44.1 - Math.pow(gdistance, 0.85)), Math.max(21.5, 42.1 - Math.pow(gdistance, 0.85)), 0, 360 * factor, 60, [255, 255, 255, 180]);
                        gdistance < 13 ? Render.Glow(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(25, 49 - Math.pow(gdistance, 0.85)), [200, 0, 0, 20]) : null
                        Render.String(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1], 96, sy - 3) - 61 : screen[1] - 15, 1, 'i', [255, 255, 255, 190], fonts()[7]);
                        Render.String(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1], 96, sy - 3) - 40 : screen[1] + 7, 1, gdistance + '', [255, 255, 255, 180], fonts()[6]);
                    }
                }
                if (g.Type == 'Grenade' && _0x1d891c()) {
                    var armor = Entity.GetProp(local, 'CCSPlayerResource', 'm_iArmor');
                    var hp = Entity.GetProp(local, 'CCSPlayer', 'm_iHealth')
                    var gx = origin[0] - destination[0];
                    var gy = origin[1] - destination[1];
                    var gz = origin[2] - destination[2];
                    var distance = Math.sqrt(gx * gx + gy * gy + gz * gz);
                    var a = 106.5;
                    var b = 25.0;
                    var c = 140.0;
                    var d = (distance - b) / (c + 1.2);
                    var damage = (a - 18) * Math.exp(-d * d);
                    if (armor > 0) {
                        var newDmg = damage * 0.7;
                        var armorDmg = (damage - newDmg) * 0.7;
                        if (armorDmg > armor) {
                            armor = armor * (1 / 0.5);
                            newDmg = damage - armorDmg;
                        }
                        damage = newDmg;
                    }
                    hedamage = nade == 1 ? clamp(Math.ceil(damage) - 1, 0, armor > 0 ? 57 : 98) : 0;
                    var time = throwtick * Globals.TickInterval();
                    var factor = clamp(((time + 1.6) - Globals.Curtime()) / 1.6, 0, 1.6);
                        Render.FilledCircle(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(25, 45 - Math.pow(gdistance, 0.85)), [0, 0, 0, 205])
                        Render.Arc(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(22.5, 44.1 - Math.pow(gdistance, 0.85)), Math.max(21.5, 42.1 - Math.pow(gdistance, 0.85)), 0, 360 * factor, 60, [255, 255, 255, 180]);
                        hedamage > 0 ? Render.Glow(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(25, 44 - Math.pow(gdistance, 0.85)), [hedamage < hp * 0.3 ? Math.max(0, 185 - Math.pow(gdistance, hp / (hp / 1.55))) : Math.max(0, 170 - Math.pow(gdistance, hp / (hp / 1.55))), hedamage < hp * 0.3 ? clamp(210 - Math.pow(gdistance, 1.6), 0, 65) : hedamage == 0 ? 0 : Math.pow(gdistance, 0.7), hedamage < hp * 0.3 ? clamp(210 - Math.pow(gdistance, 1.6), 0, 65) : hedamage == 0 ? 0 : Math.pow(gdistance, 0.7), 50]) : null
                        Render.String(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1], 96, sy - 3) - 68 : screen[1] - 20, 1, 'j', [255, 255, 255, 195], fonts()[3]);
                        Render.String(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1], 96, sy - 3) - 40 : screen[1] + 10, 1, hedamage + '', [255, 255, 255, 180], fonts()[5]);
                }
            }
        }
        grenades = Entity.GetEntitiesByClassID(100)
        for (g in grenades) {
            for (var i = 0; i < grenades.length; i++) {
                g = grenades[i];
                destination = Entity.GetRenderOrigin(g);
                screen = Render.WorldToScreen(destination);
                var gdistance = Distance2D(origin, destination);
                var mollydestination = Entity.GetRenderOrigin(grenades[i])
                var time = Entity.GetProp(g, 'CInferno', 'm_nFireEffectTickBegin') * Globals.TickInterval();
                var mollyowner = Entity.GetProp(g, 'CInferno', 'm_hOwnerEntity')
                var mollycount = Entity.GetProp(g, 'CInferno', 'm_fireCount')
                var factor = clamp(((time + 7) - Globals.Curtime()) / 7, 0, 7);
                var x = Render.WorldToScreen(destination)[0]
                var y = Render.WorldToScreen(destination)[1]
                var oof = x - Math.max(25, 45 - Math.pow(gdistance, 0.85)) < 0 || x + Math.max(25, 45 - Math.pow(gdistance, 0.85)) > sx || y + Math.max(25, 45 - Math.pow(gdistance, 0.85)) > sy || y - Math.max(25, 45 - Math.pow(gdistance, 0.85)) < 0
                var yaw = oofyaw(origin, destination);
                var new_point = oofangle(center_screen[0], center_screen[1], yaw, center_screen[1])
                var old_point = oofangle(center_screen[0], center_screen[1], yaw, center_screen[0])
                new_point = oofangle(new_point[0], new_point[1], yaw, 20 / Math.tan(rad(45)))
                old_point = oofangle(old_point[0], old_point[1], yaw, 50 / Math.tan(rad(45)))
                if (gdistance < 34) {
                        Render.FilledCircle(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(25, 45 - Math.pow(gdistance, 0.85)), [0, 0, 0, 205])
                        Render.Arc(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(22.5, 44.1 - Math.pow(gdistance, 0.85)), Math.max(21.5, 42.1 - Math.pow(gdistance, 0.85)), 0, 360 * factor, 60, [255, 255, 255, 180]);
                        clamp(15 * mollycount, 50, 180) > gdistance * 9 ? Render.Glow(oof ? clamp(old_point[0], 50, sx - 50) : screen[0], oof ? clamp(new_point[1] - 46, 50, sy - 50) : screen[1], Math.max(25, 49 - Math.pow(gdistance, 0.85)), [200, 0, 0, 20]) : null
                        Render.String(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1], 96, sy - 3) - 61 : screen[1] - 15, 1, 'i', [255, 255, 255, 190], fonts()[7]);
                        Render.String(oof ? clamp(old_point[0], 50, sx - 50): screen[0], oof ? clamp(new_point[1], 96, sy - 3) - 39 : screen[1] + 7, 1, gdistance + '', [255, 255, 255, 180], fonts()[6]);
                }
            if (gdistance < 70 && getval('Grenade radius')) {
                if (Entity.GetProp(g, 'CInferno', 'm_nFireEffectTickBegin') && mollyowner != 'm_hOwnerEntity' && Entity.IsEnemy(mollyowner) && Convar.GetString('mp_friendlyfire') != 0 || mollyowner == local) {
                    {
                        Render.Circle3D(mollydestination[0], mollydestination[1], mollydestination[2], 180, 0.3, UI.GetColor(['Rage', 'Paragon', 'Molly radius color']));
                        Render.ShadowString(screen[0], screen[1] + 6, 1, 'molly', [240, 240, 240, 200], fonts()[1]);
                    }
                }
            }
        }
    }
}
    if (getvaldrop(getval('AA Tweaks'), 0)) {
        if (left != 0 || right != 0 || back != 0 || UI.GetValue(['Rage', 'Anti Aim', 'General', 'Key assignment', 'Left direction']) || UI.GetValue(['Rage', 'Anti Aim', 'General', 'Key assignment', 'Right direction']) || UI.GetValue(['Rage', 'Anti Aim', 'General', 'Key assignment', 'Back direction'])) {
            static = true
        } else {
            static = false
        }
    }
    if (getval('FPS Boost')) {
        UI.SetValue(['Misc.', 'Helpers', 'Client', 'Force sv_cheats'], 1)
        UI.SetValue(['Misc.', 'Helpers', 'Client', 'Reveal hidden cvars'], 1)
        Convar.SetString('r_shadows', '0');
        Convar.SetString('cl_csm_static_prop_shadows', '0');
        Convar.SetString('cl_csm_shadows', '0');
        Convar.SetString('cl_csm_world_shadows', '0');
        Convar.SetString('cl_foot_contact_shadows', '0');
        Convar.SetString('cl_csm_viewmodel_shadows', '0');
        Convar.SetString('cl_csm_rope_shadows', '0');
        Convar.SetString('cl_csm_sprite_shadows', '0');
        Convar.SetString('cl_csm_world_shadows_in_viewmodelcascade', '0');
        Convar.SetString('cl_csm_translucent_shadows', '0');
        Convar.SetString('cl_csm_entity_shadows', '0');
        Convar.SetString('violence_hblood', '0');
        Convar.SetString('r_3dsky', '0');
        Convar.SetString('r_drawdecals', '0');
        Convar.SetString('r_drawrain', '0');
        Convar.SetString('r_drawropes', '0');
        Convar.SetString('r_drawsprites', '0');
        Convar.SetString('fog_enable_water_fog', '0');
        Convar.SetString('@panorama_disable_blur', '1');
        Convar.SetString('dsp_slow_cpu', '1');
        Convar.SetString('cl_disable_ragdolls', '1');
        Convar.SetString('mat_disable_bloom', '1');
    } else {
        Convar.SetString('r_shadows', '1');
        Convar.SetString('cl_csm_static_prop_shadows', '1');
        Convar.SetString('cl_csm_shadows', '1');
        Convar.SetString('cl_csm_world_shadows', '1');
        Convar.SetString('cl_foot_contact_shadows', '1');
        Convar.SetString('cl_csm_viewmodel_shadows', '1');
        Convar.SetString('cl_csm_rope_shadows', '1');
        Convar.SetString('cl_csm_sprite_shadows', '1');
        Convar.SetString('cl_csm_world_shadows_in_viewmodelcascade', '1');
        Convar.SetString('cl_csm_translucent_shadows', '1');
        Convar.SetString('cl_csm_entity_shadows', '1');
        Convar.SetString('violence_hblood', '1');
        Convar.SetString('r_3dsky', '1');
        Convar.SetString('r_drawdecals', '1');
        Convar.SetString('r_drawrain', '1');
        Convar.SetString('r_drawropes', '1');
        Convar.SetString('r_drawsprites', '1');
        Convar.SetString('fog_enable_water_fog', '1');
        Convar.SetString('@panorama_disable_blur', '0');
        Convar.SetString('dsp_slow_cpu', '0');
        Convar.SetString('cl_disable_ragdolls', '0');
        Convar.SetString('mat_disable_bloom', '0');
    }
    if (getval('Console filter') && Convar.GetString('con_filter_enable') != 1) {
        Convar.SetString('con_filter_enable', '1');
        Convar.SetString('con_filter_text', 'paragonjs');
        Convar.SetString('con_filter_text_out', '1');
    }
    if (bind('Freestand')) {
        if (UI.GetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset']) != 90 && UI.GetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset']) != -90)
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Auto direction'], 1);
    } else {
        UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Auto direction'], 0);
    }
    if (getval('Grenade ESP')) {
        if (World.GetServerString() == '') {}
        enemies = Entity.GetEnemies();
        for (i = 0; i < enemies.length; i++) {
            if (Entity.IsAlive(enemies[i])) {
                var pos = Entity.GetRenderBox(enemies[i])
                var x = (pos[3] - pos[1]) / 2
                x += pos[1]
                str = ''
                for (var b = 0; b < Entity.GetWeapons(enemies[i]).length; b++) {
                    str += grenadeespname(Entity.GetName(Entity.GetWeapons(enemies[i])[b]))
                }
                Render.String(x - 1, pos[2] - 34, 1, str, Entity.IsDormant(enemies[i]) ? [25, 25, 25, 120] : [25, 25, 25, 255], fonts()[2])
                Render.String(x, pos[2] - 33, 1, str, Entity.IsDormant(enemies[i]) ? [255, 255, 255, 120] : [255, 255, 255, 255], fonts()[2])
            }
        }
    }
}

function paragon() {
    if (_0x1d891c()) {
        var hitover = getval('Hitchance override');
        if (bind('Hitchance override') && getval('Hitchance override on key')) {
            if (hitover == 0) {
                hitover = getval('Hitchance override');
            }
            for (var i in target) {
                Ragebot.ForceTargetHitchance(target[i], hitover);
            }
        }
        if (getvaldrop(getval('DT Features'), 3) && !UI.GetValue(['Rage', 'General', 'Damage override']) && UI.GetValue(['Rage', 'Exploits', 'Keys', 'Key assignment', 'Double tap'])) {
            if (is_weapon('g3sg1') || is_weapon('scar 20')) {
                if (Exploit.GetCharge() == 1) {
                    for (i in target) {
                        var hp = Entity.GetProp(target[i], 'CBasePlayer', 'm_iHealth')
                        Ragebot.ForceTargetMinimumDamage(target[i], hp / 2)
                    }
                }
            }
        }
        if (getval('Tank AA') && _0x1d891c() && _0x16fa() && !static) {
            var walking = Entity.GetProp(local, 'CCSPlayer', 'm_bIsWalking');
            var randomvalue = randomize(getval('Random'))
            var running = getvelocity() >= 84 && !air && !Input.IsKeyPressed(0x20) && !Input.IsKeyPressed(0x10)
            var standing = getvelocity() < 25 && !air
            var ducking = Entity.GetProp(local, 'CBasePlayer', 'm_flDuckAmount') > 0 && !air && !Input.IsKeyPressed(0x20) || UI.GetValue(['Rage', 'Anti Aim', 'General', 'Fake duck'])
            if (getvaldrop(getval('AA Tweaks'), 2) && started) {
                presset = presset + 1
                if (getval('Preset') == 2 || getval('Preset') == 3 || getval('Preset') == 4) {
                    presset = 0
                }
                started = false;
                setval('Preset', presset)
            }
            if (getval('Preset') == 4 && !Input.IsKeyPressed(0x45)) {
                if (running) {
                    antiaim = getval('Running') + randomvalue;
                } else if (standing) {
                    antiaim = getval('Standing') + randomvalue;
                } else if (air) {
                    antiaim = getval('Air') + randomvalue;
                } else if (walking) {
                    antiaim = getval('Walking') + randomvalue;
                }
                if (ducking) {
                    antiaim = getval('Ducking') + randomvalue;
                }
            }
            if (getval('Preset') == 3 && !Input.IsKeyPressed(0x45)) {
                antiaim = randomize(90)
            }
            if (getval('Preset') == 0 && !Input.IsKeyPressed(0x45)) {
                if (running) {
                    antiaim = 35 + randomize(3);
                } else if (standing) {
                    antiaim = 32 + randomize(3);
                } else if (air) {
                    antiaim = 18 + randomize(3);
                } else if (walking) {
                    antiaim = 18 + randomize(3);
                }
                if (ducking) {
                    antiaim = 32 + randomize(3);
                }
            }
            if (getval('Preset') == 1 && !Input.IsKeyPressed(0x45)) {
                if (running) {
                    antiaim = 22 + randomize(1);
                } else if (standing) {
                    antiaim = 35 + randomize(1);
                } else if (air) {
                    antiaim = 32 + randomize(1);
                } else if (walking) {
                    antiaim = 32 + randomize(1);
                }
                if (ducking) {
                    antiaim = 18 + randomize(1);
                }
            }
            if (getval('Preset') == 2 && !Input.IsKeyPressed(0x45)) {
                if (running) {
                    antiaim = 18 + randomize(2);
                } else if (standing) {
                    antiaim = 18 + randomize(2);
                } else if (air) {
                    antiaim = 18 + randomize(2);
                } else if (walking) {
                    antiaim = 35 + randomize(2);
                }
                if (ducking) {
                    antiaim = 16 + randomize(2);
                }
            }
            if (getval('Delay tick') > 0 && getval('Preset') == 4) {
            var d = (Globals.Curtime() * (11 - getval('Delay tick'))).toFixed(0) % 2
            } else {
                d = (Globals.Curtime() * 100000).toFixed(0) % 2
            }
            switch (d) {
            case 0:
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(antiaim);
                AntiAim.SetRealOffset(-60);
                AntiAim.SetLBYOffset(0);
                break;
            case 1:
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(antiaim - (antiaim * 2));
                AntiAim.SetRealOffset(60);
                AntiAim.SetLBYOffset(0);
                break;
            }
        }
        if (getval('Dormant aimbot') && bind('Dormant aimbot')) {
            for (i = 0; i < target.length; i++) {
                if (Entity.IsAlive(target[i]) && Entity.IsDormant(target[i])) {
                    var startPos = Entity.GetHitboxPosition(local, 0)
                    var endPos = Entity.GetRenderOrigin(target[i])
                    endPos[2] = endPos[2] + 38
                    var trace_result = Trace.Bullet(local, target[i], startPos, endPos);
                    if (trace_result[1] > 0) {
                        var arr = deg(startPos, endPos);
                        var yaw = arr[0]
                        var pitch = arr[1]
                        if (Local.GetInaccuracy() < 0.01) {
                            UserCMD.SetViewAngles([pitch, yaw, 0], true)
                            UserCMD.SetButtons(UserCMD.GetButtons | 1)
                        }
                    }
                }
            }
        }
        if (getval('Autostrafer fix')) {
            if (getvelocity() < 250) {
                UI.SetValue(['Misc.', 'Movement', 'Turn speed'], getvelocity() / 2.6)
            } else {
                UI.SetValue(['Misc.', 'Movement', 'Turn speed'], getvelocity() / 5)
            }
        }
        if (getval('One-Shot revolver') && !UI.GetValue(['Rage', 'General', 'Damage override']) && bind('One-Shot revolver')) {
            UI.SetValue(['Rage', 'Target', 'Revolver', 'Minimum damage'], 100)
            UI.SetValue(['Rage', 'Accuracy', 'Revolver', 'Prefer body aim'], 1)
        } else {
            UI.SetValue(['Rage', 'Accuracy', 'Revolver', 'Prefer body aim'], r8_body_cache)
            UI.SetValue(['Rage', 'Target', 'Revolver', 'Minimum damage'], r8_dmg_cache)
        }
        if (getval('Alternative fake lag')) {
            var ab = function (a, b) {
                return a < b
            }
            ab(altfakelag, 15 - 1) ? (UserCMD.Choke(), altfakelag++) : altfakelag < 14 + 8 ? (UserCMD.Send(), altfakelag++) : altfakelag = 0;
            }
        if (getval('Leg fucker')) {
            (trufalse = 10 * Math.abs(Math.sin(64 * Globals.Realtime())), trufalse > 5 && UI.SetValue(['Misc.', 'Movement', 'Leg movement'], 0), trufalse < 5 && UI.SetValue(['Misc.', 'Movement', 'Leg movement'], 1))
        }
        if (getvaldrop(getval('DT Features'), 2)) {
            var exploitCharge = Exploit.GetCharge();
            Exploit[(1 != exploitCharge ? 'Enable' : 'Disable') + 'Recharge'](), Exploit.OverrideMaxProcessTicks(19), Exploit.OverrideShift(19)
            Exploit.OverrideTolerance(0), can_shift_shot(12) && 1 != exploitCharge && (Exploit.DisableRecharge(), Exploit.Recharge())
        } else {
            Exploit.EnableRecharge(), Exploit.OverrideShift(12), Exploit.OverrideTolerance(3)
        }
        if (getval('Warmup settings')) {
            Cheat.ExecuteCommand('mp_warmup_end')
            Cheat.ExecuteCommand('sv_cheats 1')
            Cheat.ExecuteCommand('mp_roundtime_defuse 60')
            Cheat.ExecuteCommand('mp_roundtime_hostage 60')
            Cheat.ExecuteCommand('sv_infinite_ammo 1')
            Cheat.ExecuteCommand('mp_freezetime 0')
            Cheat.ExecuteCommand('mp_maxmoney 16000')
            Cheat.ExecuteCommand('mp_startmoney 16000')
            Cheat.ExecuteCommand('mp_maxrounds 999')
            Cheat.ExecuteCommand('mp_buy_anywhere 1')
            Cheat.ExecuteCommand('mp_buytime 9999999999999')
            Cheat.ExecuteCommand('sv_airaccelerate 100')
            Cheat.ExecuteCommand('mp_restartgame 1')
            Cheat.ExecuteCommand('bot_kick')
            Cheat.ExecuteCommand('clear')
            setval('Warmup settings', 0);
        }
            time = Globals.Curtime()
                if (time > lasttime) {
                    clantag = clantag.substring(1, clantag.length) + clantag[0]
                    clantag_type = getval('Clantag') == 1 ? clantag : ''
                    Local.SetClanTag(clantag_type);
                    lasttime = (time + 0.5);
                    }
            if (Entity.GetProp(Entity.GetGameRulesProxy(), 'CCSGameRulesProxy', 'm_bWarmupPeriod') && getvaldrop(getval('AA Tweaks'), 1)) {
                if (preset_cache == 4) {
                    preset_cache = 0
                }
                setval('Preset', 3)
            } else if (!warmup) {
                setval('Preset', preset_cache)
                warmup = true
            }
        var chest = Entity.GetHitboxPosition(local, 5)
        GrenadePrediction.Run();
        var grenades = GrenadePrediction.GetLiveGrenades();
        for (var i in grenades) {
            var g = grenades[i];
            var destination = g.Position;
            var chestresult = Trace.Line(local, chest, destination) // 30
            if (chestresult[1] > 0.61) {
                nade = 1
            } else {
                nade = 0
            }
        }
        leftactive = bind('Left key [hold]');
        rightactive = bind('Right key [hold]');
        backactive = bind('Back key [hold]');
        if (leftactive && left == 0) {
            passive = Global.Tickcount();
            active = 0;
            left = 1;
            back = 0;
            right = 0;
            leftdraw = 1;
            backdraw = 0;
            rightdraw = 0;
            inactive = 0;
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], -90);
        } else if (leftactive && left == 1 && Global.Tickcount() > passive + 16) {
            active = 1;
            oldTick = Global.Tickcount();
            inactive = 1;
        }
        if (rightactive && right == 0) {
            passive = Global.Tickcount();
            active = 0;
            back = 0;
            left = 0;
            right = 1;
            leftdraw = 0;
            backdraw = 0;
            rightdraw = 1;
            inactive = 0;
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], 90);
        } else if (rightactive && right == 1 && Global.Tickcount() > passive + 16) {
            active = 1;
            oldTick = Global.Tickcount();
            inactive = 1;
        }
        if (backactive && back == 0 && Global.Tickcount() > passive + 16) {
            passive = Global.Tickcount();
            active = 0;
            back = 1;
            right = 0;
            left = 0;
            leftdraw = 0;
            inactive = 0;
            backdraw = 1;
            rightdraw = 0;
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], 0);
        } else if (backactive && back == 1 && Global.Tickcount() > passive + 16) {
            active = 1;
            oldTick = Global.Tickcount();
            inactive = 1;
        }
        if (active) {
            if (Global.Tickcount() > oldTick + 16) {
                back = 0;
                right = 0;
                left = 0;
                oldTick = Global.Tickcount();
                inactive = 1;
            }
            leftdraw = 0;
            backdraw = 0;
            rightdraw = 0;
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], 0);
        }
        if (left != 0 || right != 0 || back != 0) {
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'At targets'], 0)
        } else {
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'At targets'], 1)
        }
        if (getvaldrop(getval('AA Tweaks'), 3) && UI.GetValue(['Rage', 'Anti Aim', 'Directions', 'At targets'])) {
            for (i = 0; i < target.length; i++) {
                var localOrigin = Entity.GetRenderOrigin(local)
                var enemyPos = Entity.GetRenderOrigin(target[i])
                var wtsEnemy = Render.WorldToScreen(enemyPos)
                var world_to_screen = (localOrigin[0] - enemyPos[0] == 0 && localOrigin[1] - enemyPos[1] == 0) || rtd(Math.atan2(localOrigin[1] - enemyPos[1], localOrigin[0] - enemyPos[0])) - Local.GetViewAngles()[1]
                var calculatedFov = Math.abs(world_to_screen)
                if (calculatedFov - 10 >= 160) {
                    if (Entity.IsDormant(target[i]) && Entity.IsAlive(target[i])) {
                        var hitbox_pos = Entity.GetRenderOrigin(target[i]);
                        var viewangles = Local.GetViewAngles();
                        var localorigin = Entity.GetEyePosition(local);
                        var angle = viewangles[1] - calc_angle(localorigin, hitbox_pos)[1];
                        var yawangle = 0 - angle
                        UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], yawangle)
                    } else if (Entity.IsAlive(target[i]) && !Entity.IsDormant(target[i])) {
                        UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], 0)
                    }
                }
            }
        }
    }
    if (getvaldrop(getval('AA Tweaks'), 4) && !Entity.GetProp(local, 'CCSPlayer', 'm_bIsGrabbingHostage') && !Entity.GetProp(local, 'CCSPlayer', 'm_bIsDefusing') && _0x1d891c() && _0x16fa()) {
        if (Input.IsKeyPressed(0x45)) {
            if (original_aa) {
                restrictions_cache = UI.GetValue(['Config', 'Cheat', 'General', 'Restrictions'])
                yaw_offset_cache = UI.GetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'])
                jitter_offset_cache = UI.GetValue(['Rage', 'Anti Aim', 'Directions', 'Jitter offset'])
                pitch_cache = UI.GetValue(['Rage', 'Anti Aim', 'General', 'Pitch mode'])
                target_cache = UI.GetValue(['Rage', 'Anti Aim', 'Directions', 'At targets'])
                original_aa = false
            }
            UI.SetValue(['Config', 'Cheat', 'General', 'Restrictions'], 0);
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], 180);
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Jitter offset'], 0);
            UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'At targets'], 0);
            UI.SetValue(['Rage', 'Anti Aim', 'General', 'Pitch mode'], Entity.GetProp(local, 'CBasePlayer', 'm_flDuckAmount') > 0 && !air && !Input.IsKeyPressed(0x20) || UI.GetValue(['Rage', 'Anti Aim', 'General', 'Fake duck']) ? 1 : 0)
            if (Input.IsKeyPressed(0x45)) {
                E = false;
                if (Globals.Realtime() > legitaa_time + 0.1) {
                    if (E == false) {
                        Cheat.ExecuteCommand('+use');
                        E = true;
                    }
                    if (E == true) {
                        Cheat.ExecuteCommand('-use');
                    }
                }
            } else {
                if (E == true) {
                    Cheat.ExecuteCommand('-use');
                    E = false;
                }
            }
        } else {
            if (!original_aa) {
                UI.SetValue(['Config', 'Cheat', 'General', 'Restrictions'], restrictions_cache)
                UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Yaw offset'], yaw_offset_cache)
                UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'Jitter offset'], jitter_offset_cache)
                UI.SetValue(['Rage', 'Anti Aim', 'General', 'Pitch mode'], pitch_cache)
                UI.SetValue(['Rage', 'Anti Aim', 'Directions', 'At targets'], target_cache)
                original_aa = true
            }
            legitaa_time = Global.Realtime();
        }
    }
}

function draw() {
    ui()
    _0x1d891c()
    _0x16fa()
    knifedt()
    _0x39c8()
    paragondraw()
    indicators()
    fonts()
}

function createmove() {
    paragon()
    knife()
    r8doubletap()
}

function weapon_fire() {
    r8fire()
}
Global.RegisterCallback('Draw', 'draw')
Cheat.RegisterCallback('CreateMove', 'createmove')
Cheat.RegisterCallback('weapon_fire', 'weapon_fire')
Cheat.RegisterCallback('weapon_fire', 'recharge')
Cheat.RegisterCallback('FrameStageNotify', 'aspectratio');
Global.RegisterCallback('player_death', 'onPlayerDeath');
Cheat.RegisterCallback('grenade_thrown', 'on_grenade_thrown')
Cheat.RegisterCallback('round_start', 'on_round_start');
Cheat.PrintColor([255, 255, 0, 255], '\n')
Cheat.PrintColor([255, 255, 255, 255], '██████╗░░█████╗░██████╗░░█████╗░░██████╗░░█████╗░███╗░░██╗\n')
Cheat.PrintColor([255, 255, 255, 255], '██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝░██╔══██╗████╗░██║\n')
Cheat.PrintColor([255, 255, 255, 255], '██████╔╝███████║██████╔╝███████║██║░░██╗░██║░░██║██╔██╗██║╗\n')
Cheat.PrintColor([255, 255, 255, 255], '██╔═══╝░██╔══██║██╔══██╗██╔══██║██║░░╚██╗██║░░██║██║╚████║╗\n')
Cheat.PrintColor([255, 255, 255, 255], '██║░░░░░██║░░██║██║░░██║██║░░██║╚██████╔╝╚█████╔╝██║░╚███║\n')
Cheat.PrintColor([255, 255, 255, 255], '╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░░╚════╝░╚═╝░░╚══╝\n')
Cheat.PrintColor([200, 200, 200, 200], 'latest update -> 11.06.2023\n')
Cheat.PrintColor([200, 200, 200, 200], 'welcome back, ' + Cheat.GetUsername() + '\n')
Cheat.PrintColor([255, 255, 0, 255], '\n')
Cheat.ExecuteCommand('playvol "survival/buy_item_01.wav" 1')
var weapon = {
    'usp s': 'USP',
    'glock 18': 'Glock',
    'dual berettas': 'Dualies',
    'r8 revolver': 'Revolver',
    'desert eagle': 'Deagle',
    'p250': 'P250',
    'tec 9': 'Tec-9',
    'mp9': 'MP9',
    'mac 10': 'Mac10',
    'pp bizon': 'PP-Bizon',
    'ump 45': 'UMP45',
    'ak 47': 'AK47',
    'sg 553': 'SG553',
    'aug': 'AUG',
    'm4a1 s': 'M4A1-S',
    'm4a4': 'M4A4',
    'ssg 08': 'SSG08',
    'awp': 'AWP',
    'g3sg1': 'G3SG1',
    'scar 20': 'SCAR20',
    'xm1014': 'XM1014',
    'mag 7': 'MAG7',
    'm249': 'M249',
    'negev': 'Negev',
    'p2000': 'P2000',
    'famas': 'FAMAS',
    'five seven': 'Five Seven',
    'mp7': 'MP7',
    'ump 45': 'UMP45',
    'p90': 'P90',
    'cz75 auto': 'CZ-75',
    'mp5 sd': 'MP5',
    'galil ar': 'GALIL',
    'sawed off': 'Sawed off',
    'high explosive grenade': 'HE Grenade',
    'incendiary grenade': 'incendiary',
    'zeus x27': 'zeus',
    'molotov': 'molly',
    'decoy grenade': 'decoy',
    'smoke grenade': 'smoke',
    'flashbang': 'flash',
    'c4 explosive': 'c4w'
}
var sayenemy = ['1.'];
var saylocal = ['ну оно на мин дамаге сидит', 'че так лагает', 'у тебя 5 минут чтобы скинуть нормальный коннект', 'ну конечно анрегнет в бича', 'ахахахахахаха оно просто полетит', 'я стрелять буду не?'];