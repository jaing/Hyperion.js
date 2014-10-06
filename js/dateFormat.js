define([], function() {

    var TYPES = {
        'undefined': 'undefined',
        'number': 'number',
        'boolean': 'boolean',
        'string': 'string',
        '[object Function]': 'function',
        '[object RegExp]': 'regexp',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object Error]': 'error'
    };

    var type = function (o) {
        return TYPES[typeof o] || TYPES[Object.prototype.toString.call(o)] || (o ? 'object' : 'null');
    };

    var isDate = function (o) {
        return type(o) === 'date' && o.toString() !== 'Invalid Date' && !isNaN(o);
    };

    var isValue = function (o) {
        var t = type(o);

        switch (t) {
            case 'number':
                return isFinite(o);

            case 'null':
            case 'undefined':
                return false;

            default:
                return !!t;
        }
    };

    var xPad = function (x, pad, r) {
        if (typeof r === 'undefined') {
            r = 10;
        }
        pad = pad + '';
        for (; parseInt(x, 10) < r && r > 1; r /= 10) {
            x = pad + x;
        }
        return x.toString();
    };

    var Dt = {
        formats: {
            a: function (d, l) {
                return l.a[d.getDay()];
            },
            A: function (d, l) {
                return l.A[d.getDay()];
            },
            b: function (d, l) {
                return l.b[d.getMonth()];
            },
            B: function (d, l) {
                return l.B[d.getMonth()];
            },
            C: function (d) {
                return xPad(parseInt(d.getFullYear() / 100, 10), 0);
            },
            d: ['getDate', '0'],
            e: ['getDate', ' '],
            g: function (d) {
                return xPad(parseInt(Dt.formats.G(d) % 100, 10), 0);
            },
            G: function (d) {
                var y = d.getFullYear();
                var V = parseInt(Dt.formats.V(d), 10);
                var W = parseInt(Dt.formats.W(d), 10);

                if (W > V) {
                    y++;
                } else if (W === 0 && V >= 52) {
                    y--;
                }

                return y;
            },
            H: ['getHours', '0'],
            I: function (d) {
                var I = d.getHours() % 12;
                return xPad(I === 0 ? 12 : I, 0);
            },
            j: function (d) {
                var gmd_1 = new Date('' + d.getFullYear() + '/1/1 GMT');
                var gmdate = new Date('' + d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' GMT');
                var ms = gmdate - gmd_1;
                var doy = parseInt(ms / 60000 / 60 / 24, 10) + 1;
                return xPad(doy, 0, 100);
            },
            k: ['getHours', ' '],
            l: function (d) {
                var I = d.getHours() % 12;
                return xPad(I === 0 ? 12 : I, ' ');
            },
            m: function (d) {
                return xPad(d.getMonth() + 1, 0);
            },
            M: ['getMinutes', '0'],
            p: function (d, l) {
                return l.p[d.getHours() >= 12 ? 1 : 0 ];
            },
            P: function (d, l) {
                return l.P[d.getHours() >= 12 ? 1 : 0 ];
            },
            s: function (d, l) {
                return parseInt(d.getTime() / 1000, 10);
            },
            S: ['getSeconds', '0'],
            u: function (d) {
                var dow = d.getDay();
                return dow === 0 ? 7 : dow;
            },
            U: function (d) {
                var doy = parseInt(Dt.formats.j(d), 10);
                var rdow = 6 - d.getDay();
                var woy = parseInt((doy + rdow) / 7, 10);
                return xPad(woy, 0);
            },
            V: function (d) {
                var woy = parseInt(Dt.formats.W(d), 10);
                var dow1_1 = (new Date('' + d.getFullYear() + '/1/1')).getDay();
                var idow = woy + (dow1_1 > 4 || dow1_1 <= 1 ? 0 : 1);
                if (idow === 53 && (new Date('' + d.getFullYear() + '/12/31')).getDay() < 4) {
                    idow = 1;
                }
                else if (idow === 0) {
                    idow = Dt.formats.V(new Date('' + (d.getFullYear() - 1) + '/12/31'));
                }

                return xPad(idow, 0);
            },
            w: 'getDay',
            W: function (d) {
                var doy = parseInt(Dt.formats.j(d), 10);
                var rdow = 7 - Dt.formats.u(d);
                var woy = parseInt((doy + rdow) / 7, 10);
                return xPad(woy, 0, 10);
            },
            y: function (d) {
                return xPad(d.getFullYear() % 100, 0);
            },
            Y: 'getFullYear',
            z: function (d) {
                var o = d.getTimezoneOffset();
                var H = xPad(parseInt(Math.abs(o / 60), 10), 0);
                var M = xPad(Math.abs(o % 60), 0);
                return (o > 0 ? '-' : '+') + H + M;
            },
            Z: function (d) {
                var tz = d.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/, '$2').replace(/[a-z ]/g, '');
                if (tz.length > 4) {
                    tz = Dt.formats.z(d);
                }
                return tz;
            },
            '%': function (d) {
                return '%';
            }
        },

        aggregates: {
            c: 'locale',
            D: '%m/%d/%y',
            F: '%Y-%m-%d',
            h: '%b',
            n: '\n',
            r: '%I:%M:%S %p',
            R: '%H:%M',
            t: '\t',
            T: '%H:%M:%S',
            x: 'locale',
            X: 'locale'
        },

        parse: function (data) {
            var val = new Date(+data || data);
            if (typeof data === 'number') {
                val = new Date(val.getTime() + (val.getTimezoneOffset() * 60000))
            }
            if (isDate(val)) {
                return val;
            } else {
                console.warn('Could not convert to date');
                return null;
            }
        },

        format: function (oDate, oConfig) {
            oConfig = oConfig || {};

            if (!isDate(oDate)) {
                console.warn('not date');
                return isValue(oDate) ? oDate : '';
            }

            var format, compactMode;
            format = oConfig.format || '%Y-%m-%d';

            var resources = Iris._dateResources[Iris.language]

            var replace_aggs = function (m0, m1) {
                if (compactMode && m1 === 'r') {
                    return resources[m1];
                }
                var f = Dt.aggregates[m1];
                return (f === 'locale' ? resources[m1] : f);
            };

            var replace_formats = function (m0, m1) {
                var f = Dt.formats[m1];
                switch (type(f)) {
                    case 'string':
                        return oDate[f]();
                    case 'function':
                        return f.call(oDate, oDate, resources);
                    case 'array':
                        if (type(f[0]) === 'string') {
                            return xPad(oDate[f[0]](), f[1]);
                        }
                    default:
                        return m1;
                }
            };

            while (format.match(/%[cDFhnrRtTxX]/)) {
                format = format.replace(/%([cDFhnrRtTxX])/g, replace_aggs);
            }

            return format.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g, replace_formats);
        }
    };

    return Dt;
});