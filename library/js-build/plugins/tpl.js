define(["plugins/text","dot"],function(e,t){function i(e,t,r,i){n[e]=t,r(t)}function s(s,o,u,a){s in n?u(n[s]):e.get(o.toUrl(s),function(e){var n={render:t.template(e,r)};i(s,n,u,a)})}function o(e,t,i,s){if(t in n){var o=n[t].render.str;i.asModule(e+"!"+t,"define({ render: function("+r.varname+"){"+o+"} });\n")}}var n={},r;return{load:s}});