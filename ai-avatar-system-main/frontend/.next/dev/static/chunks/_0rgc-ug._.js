(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/providers/QueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vitals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vitals.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function QueryProvider({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        refetchOnWindowFocus: false
                    }
                }
            })
    }["QueryProvider.useState"]);
    // Boot Core Web Vitals observers once after hydration.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QueryProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vitals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initWebVitals"])();
        }
    }["QueryProvider.useEffect"], []);
    // useStore has skipHydration:true (see store/useStore.ts) — pull in the
    // persisted theme/auth/session state ourselves, but only after the first
    // client render has matched the server's, so there's no hydration mismatch.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QueryProvider.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].persist.rehydrate();
        }
    }["QueryProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/QueryProvider.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(QueryProvider, "oac4och4XvoilGqlUD5F6Lhw6Uc=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-[400px] p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "mx-auto mb-4 text-red-500",
                            size: 48
                        }, void 0, false, {
                            fileName: "[project]/components/ui/ErrorBoundary.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100",
                            children: "Something went wrong"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/ErrorBoundary.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-400 mb-4",
                            children: this.state.error?.message || 'An unexpected error occurred'
                        }, void 0, false, {
                            fileName: "[project]/components/ui/ErrorBoundary.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>this.setState({
                                    hasError: false,
                                    error: null
                                }),
                            className: "inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ErrorBoundary.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                "Try Again"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ErrorBoundary.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/ErrorBoundary.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ErrorBoundary.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/vitals.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Lightweight Core Web Vitals reporter.
 *
 * Captures LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift),
 * and INP (Interaction to Next Paint) using native PerformanceObserver —
 * no third-party dependency. Emits a single console log per metric when
 * the page becomes hidden so we don't fragment data with per-tick reports.
 *
 * For production, swap the `report()` body to POST to your analytics
 * endpoint or call a third-party SDK (Datadog RUM, Sentry, etc.).
 */ __turbopack_context__.s([
    "initWebVitals",
    ()=>initWebVitals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Thresholds match web.dev's "good / needs improvement / poor" buckets
// (Aug 2024 update — INP replaced FID as the responsiveness metric).
const THRESHOLDS = {
    LCP: [
        2500,
        4000
    ],
    CLS: [
        0.1,
        0.25
    ],
    INP: [
        200,
        500
    ]
};
function rateVital(name, value) {
    const [good, poor] = THRESHOLDS[name];
    return value <= good ? 'good' : value <= poor ? 'needs-improvement' : 'poor';
}
function report(v) {
    // In dev, log to console. Replace with `fetch('/api/v1/analytics/vitals', …)`
    // when you have an analytics endpoint.
    if ("TURBOPACK compile-time truthy", 1) {
        console.info(`[vitals] ${v.name}=${v.value.toFixed(2)} (${v.rating})`);
    }
}
function initWebVitals() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('PerformanceObserver' in window)) return;
    // ── LCP — biggest above-the-fold element. Reported on visibilitychange.
    let lcpValue = 0;
    try {
        const lcpObserver = new PerformanceObserver((list)=>{
            const entries = list.getEntries();
            const last = entries[entries.length - 1];
            lcpValue = last?.renderTime ?? last?.loadTime ?? last?.startTime ?? 0;
        });
        lcpObserver.observe({
            type: 'largest-contentful-paint',
            buffered: true
        });
    } catch  {}
    // ── CLS — sum of layout shifts grouped into 5s/1s sessions.
    let clsValue = 0;
    let clsSession = 0;
    let clsSessionStart = 0;
    let clsLastEntry = 0;
    try {
        const clsObserver = new PerformanceObserver((list)=>{
            for (const entry of list.getEntries()){
                if (entry.hadRecentInput) continue; // ignore user-initiated shifts
                const t = entry.startTime;
                if (t - clsLastEntry > 1000 || t - clsSessionStart > 5000) {
                    clsSession = 0;
                    clsSessionStart = t;
                }
                clsSession += entry.value;
                clsLastEntry = t;
                if (clsSession > clsValue) clsValue = clsSession;
            }
        });
        clsObserver.observe({
            type: 'layout-shift',
            buffered: true
        });
    } catch  {}
    // ── INP — longest interaction-to-paint duration (replaces FID).
    let inpValue = 0;
    try {
        const eventObserver = new PerformanceObserver((list)=>{
            for (const entry of list.getEntries()){
                if (entry.interactionId && entry.duration > inpValue) {
                    inpValue = entry.duration;
                }
            }
        });
        eventObserver.observe({
            type: 'event',
            buffered: true,
            durationThreshold: 16
        });
    } catch  {}
    // Emit when the user leaves the page — single, reliable report point.
    const flush = ()=>{
        if (lcpValue > 0) report({
            name: 'LCP',
            value: lcpValue,
            rating: rateVital('LCP', lcpValue)
        });
        if (clsValue > 0) report({
            name: 'CLS',
            value: clsValue,
            rating: rateVital('CLS', clsValue)
        });
        if (inpValue > 0) report({
            name: 'INP',
            value: inpValue,
            rating: rateVital('INP', inpValue)
        });
    };
    document.addEventListener('visibilitychange', ()=>{
        if (document.visibilityState === 'hidden') flush();
    }, {
        once: false
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/useStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        // Auth
        token: null,
        user: null,
        setAuth: (token, user)=>set({
                token,
                user
            }),
        clearAuth: ()=>set({
                token: null,
                user: null,
                activeSessionId: null,
                selectedAvatarId: null
            }),
        isAuthenticated: ()=>get().token !== null,
        // Theme
        theme: 'dark',
        toggleTheme: ()=>set((state)=>({
                    theme: state.theme === 'light' ? 'dark' : 'light'
                })),
        // Session
        activeSessionId: null,
        selectedAvatarId: null,
        setActiveSession: (sessionId)=>set({
                activeSessionId: sessionId
            }),
        setSelectedAvatar: (avatarId)=>set({
                selectedAvatarId: avatarId
            }),
        // WebSocket
        wsConnected: false,
        setWsConnected: (connected)=>set({
                wsConnected: connected
            })
    }), {
    name: 'avatar-system-storage',
    // Don't auto-rehydrate from localStorage during client module init —
    // that happens synchronously, BEFORE React's first client render, so
    // if a persisted value (e.g. theme) differs from the default used in
    // the server-rendered HTML, the client's first render mismatches it
    // and React throws "Hydration failed". Rehydrating manually after
    // mount (see Providers component) means the first client render
    // matches the server, and the persisted value applies in a normal
    // post-hydration update instead.
    skipHydration: true,
    partialize: (state)=>({
            token: state.token,
            user: state.user,
            theme: state.theme,
            selectedAvatarId: state.selectedAvatarId,
            activeSessionId: state.activeSessionId
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0rgc-ug._.js.map