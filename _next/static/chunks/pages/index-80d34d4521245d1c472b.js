_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    RNiq: function(t, n, e) {
      "use strict";
      e.r(n);
      var r = e("o0o1"),
        a = e.n(r),
        o = e("HaE+"),
        i = e("q1tI"),
        s = e.n(i),
        c = e("Jl2u"),
        u = e("Cgje"),
        l = e("mHNE"),
        p = e("vDqi"),
        d = e.n(p),
        m = s.a.createElement;
      function f(t) {
        var n = t.rawData,
          e = n.filter(function(t) {
            return !t.isSubmission;
          });
        return m(
          s.a.Fragment,
          null,
          m(c.a, {
            title: "Decimal Botlist",
            description: "A place to find great discord bots!"
          }),
          m(u.a, null),
          m(
            "div",
            { className: "coverpage" },
            m("h1", null, "Decimal Botlist"),
            m("p", null, "A place to find bots which suits your taste!")
          ),
          m(
            "div",
            {
              style: { padding: "30px", paddingBottom: "100px" },
              className: "home-content"
            },
            m("h1", null, "Top Bots:"),
            m(
              "div",
              { className: "row" },
              m(function() {
                return e
                  .sort(function(t, n) {
                    return n.votes - t.votes;
                  })
                  .slice(0, 8)
                  .map(function(t) {
                    return m(l.a, { bot: t });
                  });
              }, null)
            ),
            m("h1", null, "Recent Bots:"),
            m(
              "div",
              { className: "row" },
              m(function() {
                return e
                  .reverse()
                  .slice(0, 8)
                  .map(function(t) {
                    return m(l.a, { bot: t });
                  });
              }, null)
            ),
            m("h1", null, "Submissions:"),
            m(
              "div",
              { className: "row" },
              m(function() {
                return n
                  .filter(function(t) {
                    return t.isSubmission;
                  })
                  .map(function(t) {
                    return m(l.a, { bot: t });
                  });
              }, null)
            ),
            m("h1", null, "Random Bots:"),
            m(
              "div",
              { className: "row" },
              m(function() {
                return e
                  .sort(function() {
                    return Math.random() - 0.5;
                  })
                  .slice(0, 8)
                  .map(function(t) {
                    return m(l.a, { bot: t });
                  });
              }, null)
            )
          )
        );
      }
      (f.getInitialProps = (function() {
        var t = Object(o.a)(
          a.a.mark(function t(n) {
            var e;
            return a.a.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        d.a.get("https://botlistapi.decimaldev.xyz/all")
                      );
                    case 3:
                      return (
                        (e = t.sent), t.abrupt("return", { rawData: e.data })
                      );
                    case 7:
                      return (
                        (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        console.log(t.t0),
                        t.abrupt("return", { rawData: [] })
                      );
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 7]]
            );
          })
        );
        return function(n) {
          return t.apply(this, arguments);
        };
      })()),
        (n.default = f);
    },
    mHNE: function(t, n, e) {
      "use strict";
      e.d(n, "a", function() {
        return o;
      });
      var r = e("q1tI"),
        a = e.n(r).a.createElement;
      function o(t) {
        var n = t.bot;
        return a(
          "div",
          { className: "botcard" },
          a("img", { src: "".concat(n.avatar, "?size=2048"), alt: "profile" }),
          a(
            "div",
            { className: "botcard-content" },
            a("h2", null, n.name),
            a("font", { style: { opacity: 0.8 } }, n.description.short),
            a(
              "div",
              { style: { width: "100%", marginTop: "5px" } },
              a("a", { href: "/bot/".concat(n.id) }, "View"),
              a(
                "a",
                {
                  href: "https://discord.com/oauth2/authorize?client_id="
                    .concat(n.id, "&scope=bot&permissions=")
                    .concat(n.perms),
                  style: { marginLeft: "5px" }
                },
                "Invite"
              )
            )
          )
        );
      }
    },
    vlRD: function(t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function() {
          return e("RNiq");
        }
      ]);
    }
  },
  [["vlRD", 0, 1, 2, 3]]
]);
