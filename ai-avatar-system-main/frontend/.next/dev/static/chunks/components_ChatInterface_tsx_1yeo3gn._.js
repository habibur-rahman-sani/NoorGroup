(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ChatInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInterface",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-2.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/keyboard.js [app-client] (ecmascript) <export default as Keyboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const WS_AUTH_REJECT_CODE = 4401 // matches backend close code for auth/ownership failure
;
const MAX_WS_RECONNECT_ATTEMPTS = 6;
const CHAT_LANGUAGES = [
    {
        code: 'en',
        label: 'EN'
    },
    {
        code: 'es',
        label: 'ES'
    },
    {
        code: 'fr',
        label: 'FR'
    },
    {
        code: 'de',
        label: 'DE'
    },
    {
        code: 'zh',
        label: 'ZH'
    },
    {
        code: 'ja',
        label: 'JA'
    },
    {
        code: 'pt',
        label: 'PT'
    },
    {
        code: 'hi',
        label: 'HI'
    },
    {
        code: 'it',
        label: 'IT'
    },
    {
        code: 'ko',
        label: 'KO'
    }
];
function detectEmotion(text) {
    const lower = text.toLowerCase();
    if (/\b(haha|lol|funny|laugh|joke|hilarious)\b/.test(lower)) return 'happy';
    if (/\b(angry|mad|furious|annoyed|hate)\b/.test(lower)) return 'angry';
    if (/\b(sad|cry|miss|lonely|depressed|unhappy)\b/.test(lower)) return 'sad';
    if (/\b(wow|amazing|awesome|incredible|fantastic|great)\b/.test(lower)) return 'excited';
    if (/\b(think|wonder|curious|how|why|what|interesting)\b/.test(lower)) return 'curious';
    return 'neutral';
}
const EMOTION_CONFIG = {
    happy: {
        label: '😄 Happy',
        color: 'text-yellow-300',
        bg: 'bg-yellow-500/20 border-yellow-500/30'
    },
    angry: {
        label: '😠 Angry',
        color: 'text-red-300',
        bg: 'bg-red-500/20 border-red-500/30'
    },
    sad: {
        label: '😢 Sad',
        color: 'text-blue-300',
        bg: 'bg-blue-500/20 border-blue-500/30'
    },
    excited: {
        label: '🤩 Excited',
        color: 'text-purple-300',
        bg: 'bg-purple-500/20 border-purple-500/30'
    },
    curious: {
        label: '🤔 Curious',
        color: 'text-cyan-300',
        bg: 'bg-cyan-500/20 border-cyan-500/30'
    },
    neutral: {
        label: '😊 Neutral',
        color: 'text-gray-300',
        bg: 'bg-gray-500/20 border-gray-500/30'
    }
};
// Deterministic per-bar heights — a static varied pattern instead of
// Math.random() (which is impure in render and jitters on every re-render).
// The CSS `waveform` animation supplies the live motion when `active`.
const _WAVE_HEIGHTS = [
    10,
    18,
    8,
    22,
    14,
    20,
    6,
    16
];
function WaveformBars({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-0.5 h-6",
        children: Array.from({
            length: 8
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 rounded-full",
                style: {
                    height: active ? `${_WAVE_HEIGHTS[i]}px` : '4px',
                    background: 'linear-gradient(to top, #7c3aed, #3b82f6)',
                    transition: 'height 0.15s ease',
                    animation: active ? 'waveform 1.2s ease-in-out infinite' : 'none',
                    animationDelay: `${i * 0.1}s`
                }
            }, i, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ChatInterface.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c = WaveformBars;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end gap-3 animate-slide-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    size: 14,
                    className: "text-white"
                }, void 0, false, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-card px-4 py-3 rounded-2xl rounded-bl-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        0,
                        0.2,
                        0.4
                    ].map((delay)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary-400 animate-bounce",
                            style: {
                                animationDelay: `${delay}s`
                            }
                        }, delay, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatInterface.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c1 = TypingIndicator;
// Idle avatar: shows the avatar image with a breathing + glow animation
function IdleAvatar({ imageUrl }) {
    if (!imageUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex flex-col items-center justify-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-full bg-gradient-to-br from-primary-600/30 to-accent-600/20\n                        flex items-center justify-center border border-white/10 animate-pulse-slow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                        size: 36,
                        className: "text-primary-400"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm",
                    children: "Avatar video will appear here"
                }, void 0, false, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatInterface.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center bg-surface-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[70%] aspect-square rounded-full avatar-idle-glow",
                style: {
                    filter: 'blur(32px)',
                    background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageUrl,
                alt: "Avatar idle",
                className: "avatar-idle relative z-10 w-full h-full object-cover",
                style: {
                    borderRadius: '0.75rem'
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-20 pointer-events-none rounded-xl",
                style: {
                    background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.25) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-3 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm\n                      px-2 py-1 rounded-full border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-300 font-medium tracking-wide",
                        children: "IDLE"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatInterface.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c2 = IdleAvatar;
function ChatInterface({ avatarId, voiceId, resumeSessionId, onSessionCreated }) {
    _s();
    const setWsConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "ChatInterface.useStore[setWsConnected]": (s)=>s.setWsConnected
    }["ChatInterface.useStore[setWsConnected]"]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ws, setWs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMsg, setStatusMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Almost ready…');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectionStatus, setConnectionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('connecting');
    const [recordingLevel, setRecordingLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [avatarImageUrl, setAvatarImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Streaming token accumulator — shown as a live bubble while LLM is generating
    const [streamingContent, setStreamingContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [latencyMs, setLatencyMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sendTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reconnectAttemptsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reconnectTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Same-value ref alongside the `ws` state: the unmount cleanup runs with
    // the FIRST render's closure (deps []), where `ws` is still null — reading
    // through a ref is the only way it sees the live socket.
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // True only when THIS mount created the session — so we end it on unmount.
    // A resumed session (opened from history) is left intact when the user leaves.
    const createdHereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Edit/delete state. We track by message id (the persisted DB id) so the
    // hover menu can drive the corresponding API call.
    const [editingMessageId, setEditingMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editDraft, setEditDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Help/keyboard-shortcuts modal
    const [showShortcuts, setShowShortcuts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // True when the reconnect loop has hit MAX_WS_RECONNECT_ATTEMPTS or the
    // backend rejected the handshake. Surfaces a "Reconnect" button in the UI.
    const [reconnectStalled, setReconnectStalled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Video playback state
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false) // true while a chunk is playing
    ;
    const [currentChunkProgress, setCurrentChunkProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0
    });
    // Chunk queue — managed via refs to avoid stale closures in event handlers
    const chunkQueueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isPlayingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hidden video element used to preload the next chunk while the current one plays
    const preloadVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const levelAnimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ── Fetch avatar image on mount ──────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getAvatars().then({
                "ChatInterface.useEffect": (avatars)=>{
                    const av = avatars.find({
                        "ChatInterface.useEffect.av": (a)=>a.id === avatarId
                    }["ChatInterface.useEffect.av"]);
                    if (av) {
                        setAvatarImageUrl(av.thumbnail_url || av.image_url || null);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Could not load avatar image');
                    }
                }
            }["ChatInterface.useEffect"]).catch({
                "ChatInterface.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Could not load avatar image')
            }["ChatInterface.useEffect"]);
        }
    }["ChatInterface.useEffect"], [
        avatarId
    ]);
    // ── Chunk queue player ───────────────────────────────────────────────────
    const playNextChunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[playNextChunk]": ()=>{
            const next = chunkQueueRef.current.shift();
            if (!next) {
                isPlayingRef.current = false;
                setShowVideo(false);
                return;
            }
            isPlayingRef.current = true;
            setShowVideo(true);
            if (videoRef.current) {
                const video = videoRef.current;
                video.src = next.url;
                // Always START muted — browsers always allow muted autoplay, even
                // outside a user gesture. Starting unmuted gets silently rejected by
                // Chrome/Edge once the LLM+TTS+animation pipeline (several seconds) has
                // eaten the brief post-gesture window that permits unmuted autoplay —
                // which would needlessly skip this clip via the catch below. Unmuting an
                // element that's ALREADY playing needs no fresh gesture, so we restore
                // the user's mute choice right after play() resolves.
                video.muted = true;
                video.play().then({
                    "ChatInterface.useCallback[playNextChunk]": ()=>{
                        video.muted = isMuted;
                    }
                }["ChatInterface.useCallback[playNextChunk]"])// A rejected play() (decode error, bad clip) must not strand the
                // queue — skip to the next chunk so playback can't hang on one bad clip.
                .catch({
                    "ChatInterface.useCallback[playNextChunk]": ()=>{
                        if (chunkQueueRef.current.length > 0) playNextChunk();
                        else {
                            isPlayingRef.current = false;
                            setShowVideo(false);
                        }
                    }
                }["ChatInterface.useCallback[playNextChunk]"]);
            }
            // Preload the next chunk in queue (if any)
            const upcoming = chunkQueueRef.current[0];
            if (upcoming && preloadVideoRef.current) {
                preloadVideoRef.current.src = upcoming.url;
            }
        }
    }["ChatInterface.useCallback[playNextChunk]"], [
        isMuted
    ]);
    // Attach ended + error handlers to the video element. The error handler is
    // critical: a 404 / expired presigned URL / undecodable chunk fires `error`
    // (not `ended`), so without this the whole reply hangs on one bad chunk.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const onEnded = {
                "ChatInterface.useEffect.onEnded": ()=>playNextChunk()
            }["ChatInterface.useEffect.onEnded"];
            const onError = {
                "ChatInterface.useEffect.onError": ()=>{
                    if (chunkQueueRef.current.length > 0) playNextChunk();
                    else {
                        isPlayingRef.current = false;
                        setShowVideo(false);
                    }
                }
            }["ChatInterface.useEffect.onError"];
            video.addEventListener('ended', onEnded);
            video.addEventListener('error', onError);
            return ({
                "ChatInterface.useEffect": ()=>{
                    video.removeEventListener('ended', onEnded);
                    video.removeEventListener('error', onError);
                }
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        playNextChunk
    ]);
    // Sync muted state to video element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            if (videoRef.current) videoRef.current.muted = isMuted;
        }
    }["ChatInterface.useEffect"], [
        isMuted
    ]);
    // Auto-scroll chat
    const scrollToBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[scrollToBottom]": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["ChatInterface.useCallback[scrollToBottom]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(scrollToBottom, [
        messages,
        isTyping,
        scrollToBottom
    ]);
    // ── WebSocket ────────────────────────────────────────────────────────────
    // Load a session's persisted messages into the transcript (used both on a
    // fresh session — usually empty — and when resuming one from history).
    const loadHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[loadHistory]": async (sid)=>{
            try {
                const prev = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getMessages(sid);
                if (Array.isArray(prev) && prev.length > 0) {
                    setMessages(prev.filter({
                        "ChatInterface.useCallback[loadHistory]": (m)=>m.role === 'user' || m.role === 'assistant'
                    }["ChatInterface.useCallback[loadHistory]"]).map({
                        "ChatInterface.useCallback[loadHistory]": (m)=>({
                                id: m.id,
                                role: m.role,
                                content: m.content,
                                timestamp: new Date(m.created_at),
                                emotion: detectEmotion(m.content),
                                persisted: true
                            })
                    }["ChatInterface.useCallback[loadHistory]"]));
                }
            } catch  {}
        }
    }["ChatInterface.useCallback[loadHistory]"], []);
    // Attach to an EXISTING session (resume from history). The backend
    // rehydrates the LLM context on connect; we restore the visible transcript.
    const adoptSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[adoptSession]": (sid)=>{
            setSessionId(sid);
            sessionIdRef.current = sid;
            createdHereRef.current = false;
            connectWebSocket(sid);
            onSessionCreated?.(sid);
            loadHistory(sid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatInterface.useCallback[adoptSession]"], [
        loadHistory
    ]);
    const createSessionMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "ChatInterface.useMutation[createSessionMutation]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createSession(avatarId)
        }["ChatInterface.useMutation[createSessionMutation]"],
        onSuccess: {
            "ChatInterface.useMutation[createSessionMutation]": async (data)=>{
                setSessionId(data.id);
                sessionIdRef.current = data.id;
                createdHereRef.current = true;
                connectWebSocket(data.id);
                onSessionCreated?.(data.id);
                await loadHistory(data.id);
            }
        }["ChatInterface.useMutation[createSessionMutation]"],
        onError: {
            "ChatInterface.useMutation[createSessionMutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to start session');
                setConnectionStatus('disconnected');
            }
        }["ChatInterface.useMutation[createSessionMutation]"]
    });
    const connectWebSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[connectWebSocket]": (sid)=>{
            const websocket = new WebSocket((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSessionWsUrl"])(sid));
            const wasFreshConnect = reconnectAttemptsRef.current === 0;
            websocket.onopen = ({
                "ChatInterface.useCallback[connectWebSocket]": ()=>{
                    reconnectAttemptsRef.current = 0;
                    setReconnectStalled(false);
                    setConnectionStatus('connected');
                    setWsConnected(true);
                    if (wasFreshConnect) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Connected to avatar!', {
                            icon: '✨'
                        });
                    }
                    if (voiceId) {
                        websocket.send(JSON.stringify({
                            type: 'set_voice',
                            voice_id: voiceId
                        }));
                    }
                }
            })["ChatInterface.useCallback[connectWebSocket]"];
            websocket.onmessage = ({
                "ChatInterface.useCallback[connectWebSocket]": (event)=>{
                    handleWebSocketMessage(JSON.parse(event.data));
                }
            })["ChatInterface.useCallback[connectWebSocket]"];
            websocket.onerror = ({
                "ChatInterface.useCallback[connectWebSocket]": ()=>{
                    setConnectionStatus('disconnected');
                    setWsConnected(false);
                }
            })["ChatInterface.useCallback[connectWebSocket]"];
            websocket.onclose = ({
                "ChatInterface.useCallback[connectWebSocket]": (event)=>{
                    setConnectionStatus('disconnected');
                    setWsConnected(false);
                    // 4401 = backend rejected the handshake (no token, bad token, or not the
                    // session owner). No point reconnecting — surface a clear error instead.
                    if (event.code === WS_AUTH_REJECT_CODE) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Not authorised to join this session — please sign in again.');
                        setReconnectStalled(true);
                        return;
                    }
                    const sidNow = sessionIdRef.current;
                    if (!sidNow) return;
                    if (reconnectAttemptsRef.current >= MAX_WS_RECONNECT_ATTEMPTS) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Lost connection to avatar.');
                        setReconnectStalled(true);
                        return;
                    }
                    const delay = Math.min(1000 * 2 ** reconnectAttemptsRef.current, 30000);
                    reconnectAttemptsRef.current += 1;
                    reconnectTimerRef.current = setTimeout({
                        "ChatInterface.useCallback[connectWebSocket]": ()=>connectWebSocket(sidNow)
                    }["ChatInterface.useCallback[connectWebSocket]"], delay);
                }
            })["ChatInterface.useCallback[connectWebSocket]"];
            wsRef.current = websocket;
            setWs(websocket);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatInterface.useCallback[connectWebSocket]"], [
        voiceId,
        setWsConnected
    ]);
    const handleWebSocketMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[handleWebSocketMessage]": (data)=>{
            switch(data.type){
                // Live token stream — accumulate into a streaming bubble
                case 'token':
                    setStreamingContent({
                        "ChatInterface.useCallback[handleWebSocketMessage]": (prev)=>prev + data.token
                    }["ChatInterface.useCallback[handleWebSocketMessage]"]);
                    setIsTyping(false);
                    break;
                case 'transcription':
                    {
                        const text = data.text;
                        setMessages({
                            "ChatInterface.useCallback[handleWebSocketMessage]": (prev)=>[
                                    ...prev,
                                    {
                                        id: Date.now().toString(),
                                        role: 'user',
                                        content: text,
                                        timestamp: new Date(),
                                        emotion: detectEmotion(text)
                                    }
                                ]
                        }["ChatInterface.useCallback[handleWebSocketMessage]"]);
                        setStreamingContent('');
                        setIsTyping(true);
                        break;
                    }
                case 'message':
                    {
                        const content = data.content;
                        setStreamingContent('');
                        setIsTyping(false);
                        setMessages({
                            "ChatInterface.useCallback[handleWebSocketMessage]": (prev)=>[
                                    ...prev,
                                    {
                                        id: Date.now().toString(),
                                        role: 'assistant',
                                        content,
                                        timestamp: new Date(),
                                        emotion: detectEmotion(content)
                                    }
                                ]
                        }["ChatInterface.useCallback[handleWebSocketMessage]"]);
                        break;
                    }
                case 'video_chunk_start':
                    chunkQueueRef.current = [];
                    setCurrentChunkProgress({
                        current: 0,
                        total: data.total_chunks
                    });
                    break;
                case 'video_chunk':
                    {
                        const chunk = {
                            url: data.video_url,
                            text: data.text
                        };
                        chunkQueueRef.current.push(chunk);
                        setCurrentChunkProgress({
                            "ChatInterface.useCallback[handleWebSocketMessage]": (prev)=>({
                                    current: data.chunk_index + 1,
                                    total: prev.total
                                })
                        }["ChatInterface.useCallback[handleWebSocketMessage]"]);
                        // First chunk arriving → record latency, clear spinner, start playback
                        if (!isPlayingRef.current) {
                            if (sendTimeRef.current) setLatencyMs(Date.now() - sendTimeRef.current);
                            setIsProcessing(false);
                            playNextChunk();
                        } else {
                            // Already playing — preload this incoming chunk
                            const upcoming = chunkQueueRef.current[0];
                            if (upcoming && preloadVideoRef.current && preloadVideoRef.current.src !== upcoming.url) {
                                preloadVideoRef.current.src = upcoming.url;
                            }
                        }
                        break;
                    }
                case 'video_chunk_end':
                    // If nothing ever played (all chunks failed), clear spinner
                    if (!isPlayingRef.current) setIsProcessing(false);
                    break;
                case 'status':
                    // The backend sends an "Animating…" status before EVERY sentence
                    // chunk, not just the first. Once a chunk has already started playing,
                    // re-showing the full-screen spinner on every subsequent chunk just
                    // covers the video that's still going — the user sees the spinner
                    // "stuck" and never the avatar. Only block the view pre-first-chunk.
                    if (!isPlayingRef.current) {
                        setIsProcessing(true);
                        setStatusMsg(data.message || 'Processing…');
                    }
                    break;
                case 'error':
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(data.message);
                    setIsProcessing(false);
                    setIsTyping(false);
                    break;
                case 'tts_fallback':
                    // Emitted once per turn when Chatterbox fails and we fell back to
                    // gTTS — voice cloning is silently lost in that case, so warn the
                    // user so they know the avatar's voice isn't what they expect.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(data.message, {
                        icon: '⚠️',
                        duration: 5000
                    });
                    break;
                case 'interrupted':
                    // Backend cancelled the previous turn because the user spoke again
                    // (barge-in). Stop playback, clear the buffer, and let the new turn
                    // start cleanly. We don't show a toast — barge-in should be silent.
                    chunkQueueRef.current = [];
                    isPlayingRef.current = false;
                    setShowVideo(false);
                    if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.src = '';
                    }
                    setIsProcessing(false);
                    setIsTyping(false);
                    setStreamingContent('');
                    break;
                case 'pong':
                    break;
            }
        }
    }["ChatInterface.useCallback[handleWebSocketMessage]"], [
        playNextChunk
    ]);
    const sendMessage = ()=>{
        if (!inputText.trim() || !ws || !sessionId) return;
        if (ws.readyState !== WebSocket.OPEN) {
            // send() on a CONNECTING socket throws; on CLOSED it silently drops.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Not connected to the avatar yet — try again in a moment.');
            return;
        }
        const emotion = detectEmotion(inputText);
        ws.send(JSON.stringify({
            type: 'text',
            text: inputText
        }));
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now().toString(),
                    role: 'user',
                    content: inputText,
                    timestamp: new Date(),
                    emotion
                }
            ]);
        setInputText('');
        setStreamingContent('');
        setIsProcessing(true);
        setIsTyping(true);
        setLatencyMs(null);
        sendTimeRef.current = Date.now();
        chunkQueueRef.current = [];
        isPlayingRef.current = false;
        setShowVideo(false);
    };
    // Barge-in: tell the backend to cancel the in-flight turn and stop playback
    // locally right away (don't wait for the round-trip `interrupted` event).
    const stopGeneration = ()=>{
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({
                type: 'stop'
            }));
        }
        chunkQueueRef.current = [];
        isPlayingRef.current = false;
        setShowVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.src = '';
        }
        setIsProcessing(false);
        setIsTyping(false);
        setStreamingContent('');
    };
    const exportConversation = ()=>{
        if (messages.length === 0) return;
        const lines = messages.map((m)=>`[${new Date(m.timestamp).toLocaleTimeString()}] ${m.role === 'user' ? 'You' : 'Avatar'}: ${m.content}`);
        const blob = new Blob([
            lines.join('\n')
        ], {
            type: 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `conversation-${new Date().toISOString().slice(0, 10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Conversation exported');
    };
    const changeLanguage = (lang)=>{
        setLanguage(lang);
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({
                type: 'set_language',
                language: lang
            }));
        }
    };
    const startRecording = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const audioCtx = new AudioContext();
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            audioCtx.createMediaStreamSource(stream).connect(analyser);
            audioContextRef.current = audioCtx;
            analyserRef.current = analyser;
            const updateLevel = ()=>{
                const data = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(data);
                setRecordingLevel(Math.min(100, data.reduce((a, b)=>a + b, 0) / data.length * 2));
                levelAnimRef.current = requestAnimationFrame(updateLevel);
            };
            updateLevel();
            const mediaRecorder = new MediaRecorder(stream);
            const audioChunks = [];
            mediaRecorder.ondataavailable = (e)=>audioChunks.push(e.data);
            mediaRecorder.onstop = async ()=>{
                cancelAnimationFrame(levelAnimRef.current);
                setRecordingLevel(0);
                audioCtx.close();
                const audioBlob = new Blob(audioChunks, {
                    type: 'audio/webm'
                });
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    const base64Audio = reader.result.split(',')[1];
                    if (ws && ws.readyState === WebSocket.OPEN) {
                        setLatencyMs(null);
                        sendTimeRef.current = Date.now();
                        ws.send(JSON.stringify({
                            type: 'audio',
                            audio: base64Audio
                        }));
                        setIsProcessing(true);
                        chunkQueueRef.current = [];
                        isPlayingRef.current = false;
                        setShowVideo(false);
                    }
                };
                reader.readAsDataURL(audioBlob);
                stream.getTracks().forEach((t)=>t.stop());
            };
            mediaRecorder.start();
            mediaRecorderRef.current = mediaRecorder;
            setIsRecording(true);
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to access microphone');
        }
    };
    const stopRecording = ()=>{
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
    };
    const resetVideo = ()=>{
        chunkQueueRef.current = [];
        isPlayingRef.current = false;
        setShowVideo(false);
        if (videoRef.current) videoRef.current.src = '';
    };
    const copyMessage = (content)=>{
        navigator.clipboard.writeText(content);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Copied!', {
            duration: 1500
        });
    };
    const startEditMessage = (m)=>{
        setEditingMessageId(m.id);
        setEditDraft(m.content);
    };
    const cancelEditMessage = ()=>{
        setEditingMessageId(null);
        setEditDraft('');
    };
    const saveEditMessage = async (id)=>{
        const next = editDraft.trim();
        if (!next) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Message cannot be empty');
            return;
        }
        // Optimistic update — revert if the backend rejects
        const previous = messages;
        setMessages((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    content: next,
                    emotion: detectEmotion(next)
                } : m));
        setEditingMessageId(null);
        setEditDraft('');
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].editMessage(id, next);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Message updated', {
                duration: 1500
            });
        } catch  {
            setMessages(previous);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Could not update message');
        }
    };
    const deleteMessage = async (id)=>{
        if (!window.confirm('Delete this message?')) return;
        const previous = messages;
        setMessages((prev)=>prev.filter((m)=>m.id !== id));
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteMessage(id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Message deleted', {
                duration: 1500
            });
        } catch  {
            setMessages(previous);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Could not delete message');
        }
    };
    /** Force an immediate reconnect, cancelling any pending backoff timer. */ const manualReconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInterface.useCallback[manualReconnect]": ()=>{
            const sid = sessionIdRef.current;
            if (!sid) return;
            if (reconnectTimerRef.current) {
                clearTimeout(reconnectTimerRef.current);
                reconnectTimerRef.current = null;
            }
            reconnectAttemptsRef.current = 0;
            setReconnectStalled(false);
            setConnectionStatus('connecting');
            connectWebSocket(sid);
        }
    }["ChatInterface.useCallback[manualReconnect]"], [
        connectWebSocket
    ]);
    // Global keyboard shortcuts — only active while the chat view is mounted.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            const onKey = {
                "ChatInterface.useEffect.onKey": (e)=>{
                    // ? opens the shortcut cheat-sheet (matches GitHub / Linear convention)
                    if (e.key === '?' && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        // Don't intercept when typing into an input/textarea
                        const t = e.target;
                        const tag = t?.tagName?.toLowerCase();
                        if (tag === 'input' || tag === 'textarea' || t?.isContentEditable) return;
                        e.preventDefault();
                        setShowShortcuts({
                            "ChatInterface.useEffect.onKey": (s)=>!s
                        }["ChatInterface.useEffect.onKey"]);
                        return;
                    }
                    // Esc dismisses the modal
                    if (e.key === 'Escape' && showShortcuts) {
                        setShowShortcuts(false);
                    }
                    // Cmd/Ctrl+E toggles mute
                    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'e') {
                        e.preventDefault();
                        setIsMuted({
                            "ChatInterface.useEffect.onKey": (m)=>!m
                        }["ChatInterface.useEffect.onKey"]);
                    }
                }
            }["ChatInterface.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "ChatInterface.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["ChatInterface.useEffect"];
        }
    }["ChatInterface.useEffect"], [
        showShortcuts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInterface.useEffect": ()=>{
            // Resume an existing conversation if asked (history "Open"), otherwise
            // create a fresh session.
            if (resumeSessionId) {
                adoptSession(resumeSessionId);
            } else {
                createSessionMutation.mutate();
            }
            return ({
                "ChatInterface.useEffect": ()=>{
                    // Cancel any pending reconnect
                    if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
                    // Read the session id BEFORE nulling the ref (which stops the
                    // reconnect loop). Don't use the `sessionId`/`ws` state here: this
                    // cleanup closes over the first render where both were still null,
                    // which used to leak the open socket and never end created sessions.
                    const sid = sessionIdRef.current;
                    sessionIdRef.current = null;
                    wsRef.current?.close();
                    wsRef.current = null;
                    setWsConnected(false);
                    // Release media resources so navigating away mid-playback/recording
                    // doesn't leak: a still-playing <video>, an open AudioContext, and a
                    // running rAF loop all survive unmount otherwise.
                    const video = videoRef.current;
                    if (video) {
                        video.pause();
                        video.removeAttribute('src');
                        video.load();
                    }
                    if (levelAnimRef.current !== null) cancelAnimationFrame(levelAnimRef.current);
                    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
                        audioContextRef.current.close().catch({
                            "ChatInterface.useEffect": ()=>{}
                        }["ChatInterface.useEffect"]);
                    }
                    // Only end sessions WE created — leaving a resumed conversation should
                    // not mark the user's existing session as ended.
                    if (sid && createdHereRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].endSession(sid).catch({
                        "ChatInterface.useEffect": ()=>{}
                    }["ChatInterface.useEffect"]);
                }
            })["ChatInterface.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatInterface.useEffect"], []);
    const isSpeaking = showVideo && !isProcessing;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-10rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-3 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-glow flex-1 relative overflow-hidden rounded-2xl group",
                        children: [
                            isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-2xl neon-border pointer-events-none z-10 animate-glow"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 783,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-video w-full bg-surface-950 rounded-xl overflow-hidden relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 transition-opacity duration-500",
                                        style: {
                                            opacity: showVideo ? 0 : 1,
                                            zIndex: showVideo ? 0 : 5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IdleAvatar, {
                                            imageUrl: avatarImageUrl
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 794,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: videoRef,
                                        className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                                        style: {
                                            opacity: showVideo ? 1 : 0,
                                            zIndex: showVideo ? 5 : 0
                                        },
                                        autoPlay: true,
                                        playsInline: true,
                                        muted: isMuted
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 798,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: preloadVideoRef,
                                        className: "hidden",
                                        preload: "auto",
                                        muted: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 807,
                                        columnNumber: 13
                                    }, this),
                                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-surface-950/75 backdrop-blur-sm flex flex-col\n                              items-center justify-center gap-4 z-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 rounded-full border-2 border-primary-500/30 animate-spin-slow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-2 rounded-full border-2 border-t-primary-400\n                                  border-r-transparent border-b-transparent border-l-transparent animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                                        className: "absolute inset-0 m-auto text-primary-400",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 817,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 813,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 font-medium animate-pulse",
                                                children: statusMsg
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 819,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    isSpeaking && currentChunkProgress.total > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/50\n                              backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 827,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-gray-300 font-medium",
                                                children: [
                                                    currentChunkProgress.current,
                                                    "/",
                                                    currentChunkProgress.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 828,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 787,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-4 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `status-dot ${connectionStatus === 'connected' ? 'online' : connectionStatus === 'connecting' ? 'processing' : 'offline'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 capitalize",
                                                        children: connectionStatus
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 838,
                                                columnNumber: 15
                                            }, this),
                                            reconnectStalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: manualReconnect,
                                                className: "flex items-center gap-1 text-xs text-primary-300 hover:text-white\n                             px-2 py-1 rounded-md border border-primary-500/40 hover:bg-primary-500/20\n                             transition-colors",
                                                title: "Reconnect",
                                                "aria-label": "Reconnect to avatar",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"], {
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Reconnect"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 847,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 837,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 px-2 py-1 rounded-lg bg-surface-700/60 border border-white/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        size: 11,
                                                        className: "text-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: language,
                                                        onChange: (e)=>changeLanguage(e.target.value),
                                                        className: "bg-transparent text-xs text-gray-300 focus:outline-none cursor-pointer",
                                                        title: "TTS language",
                                                        children: CHAT_LANGUAGES.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: l.code,
                                                                children: l.label
                                                            }, l.code, false, {
                                                                fileName: "[project]/components/ChatInterface.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                        lineNumber: 865,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 863,
                                                columnNumber: 15
                                            }, this),
                                            (showVideo || isProcessing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetVideo,
                                                className: "btn-icon",
                                                title: "Reset video",
                                                "aria-label": "Reset video",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 878,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsMuted((m)=>!m),
                                                className: `btn-icon ${isMuted ? 'text-red-400 border-red-500/30' : ''}`,
                                                title: isMuted ? 'Unmute (⌘E)' : 'Mute (⌘E)',
                                                "aria-label": isMuted ? 'Unmute avatar' : 'Mute avatar',
                                                "aria-pressed": isMuted,
                                                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 28
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 52
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 882,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowShortcuts(true),
                                                className: "btn-icon",
                                                title: "Keyboard shortcuts (?)",
                                                "aria-label": "Show keyboard shortcuts",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 891,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 861,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 836,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 780,
                        columnNumber: 9
                    }, this),
                    messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card px-4 py-3 flex items-center gap-3 rounded-xl animate-slide-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                size: 14,
                                className: "text-primary-400 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 906,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 flex-shrink-0",
                                children: "Emotion detected:"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 907,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: messages.slice(-1).map((m)=>{
                                    const e = m.emotion || 'neutral';
                                    const cfg = EMOTION_CONFIG[e];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `badge border ${cfg.bg} ${cfg.color} text-xs`,
                                        children: cfg.label
                                    }, m.id, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 913,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 905,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 779,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 flex flex-col glass-card rounded-2xl overflow-hidden p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-5 py-4 border-b border-white/8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 16,
                                        className: "text-primary-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 927,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white",
                                        children: "Conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 928,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 926,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    latencyMs !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-xs text-primary-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    (latencyMs / 1000).toFixed(1),
                                                    "s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 934,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 932,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-xs text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 12,
                                                className: "text-primary-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 938,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    messages.length,
                                                    " messages"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 939,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this),
                                    messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: exportConversation,
                                        className: "btn-icon",
                                        title: "Export conversation",
                                        "aria-label": "Export conversation as text",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 948,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 942,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 930,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 925,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-4 py-4 space-y-4 messages-scroll",
                        children: [
                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full gap-4 py-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent-600/10\n                              flex items-center justify-center border border-white/8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 28,
                                            className: "text-primary-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 959,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 957,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-medium mb-1",
                                                children: "Start the conversation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 962,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm",
                                                children: "Type a message or press the mic button"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 961,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 956,
                                columnNumber: 13
                            }, this) : messages.map((message, idx)=>{
                                const isUser = message.role === 'user';
                                const emotion = message.emotion || 'neutral';
                                const emotionCfg = EMOTION_CONFIG[emotion];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex gap-2.5 animate-slide-up ${isUser ? 'flex-row-reverse' : 'flex-row'}`,
                                    style: {
                                        animationDelay: `${idx * 0.05}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold
                    ${isUser ? 'bg-gradient-to-br from-accent-600 to-accent-800' : 'bg-gradient-to-br from-primary-600 to-primary-800'}`,
                                            children: isUser ? 'U' : 'AI'
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 977,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[85%] group ${isUser ? 'items-end' : 'items-start'} flex flex-col gap-1`,
                                            children: [
                                                editingMessageId === message.id ? // Inline editor — Enter saves, Esc cancels, Shift+Enter newline
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex flex-col gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            autoFocus: true,
                                                            value: editDraft,
                                                            onChange: (e)=>setEditDraft(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                                    e.preventDefault();
                                                                    saveEditMessage(message.id);
                                                                }
                                                                if (e.key === 'Escape') {
                                                                    e.preventDefault();
                                                                    cancelEditMessage();
                                                                }
                                                            },
                                                            maxLength: 8000,
                                                            rows: 3,
                                                            className: "w-full px-3 py-2 rounded-2xl bg-surface-700/80 border border-primary-500/40\n                                     text-white text-sm placeholder:text-gray-600 focus:outline-none\n                                     focus:ring-2 focus:ring-primary-500/50 resize-none",
                                                            "aria-label": "Edit message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 989,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 justify-end",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: cancelEditMessage,
                                                                    className: "text-xs text-gray-400 hover:text-white px-2 py-1 rounded-md hover:bg-white/5",
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                                    lineNumber: 1011,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>saveEditMessage(message.id),
                                                                    className: "text-xs text-white bg-primary-600 hover:bg-primary-500 px-2.5 py-1 rounded-md\n                                       flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            size: 11
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                                            lineNumber: 1022,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Save"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                                    lineNumber: 1017,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `relative px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                        ${isUser ? 'bg-gradient-to-br from-primary-700/80 to-accent-700/60 text-white rounded-tr-sm' : 'bg-surface-700/80 border border-white/8 text-gray-200 rounded-tl-sm'}`,
                                                    children: [
                                                        message.content,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute -top-2 ${isUser ? '-left-2' : '-right-2'} flex items-center gap-1
                                         opacity-0 group-hover:opacity-100 transition-opacity`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>copyMessage(message.content),
                                                                    className: "w-6 h-6 rounded-full bg-surface-600 border border-white/10\n                                       flex items-center justify-center hover:bg-surface-500",
                                                                    title: "Copy",
                                                                    "aria-label": "Copy message",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                        size: 10,
                                                                        className: "text-gray-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ChatInterface.tsx",
                                                                        lineNumber: 1045,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                                    lineNumber: 1038,
                                                                    columnNumber: 27
                                                                }, this),
                                                                message.persisted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>startEditMessage(message),
                                                                            className: "w-6 h-6 rounded-full bg-surface-600 border border-white/10\n                                           flex items-center justify-center hover:bg-surface-500",
                                                                            title: "Edit",
                                                                            "aria-label": "Edit message",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                                size: 10,
                                                                                className: "text-gray-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/ChatInterface.tsx",
                                                                                lineNumber: 1056,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                                            lineNumber: 1049,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>deleteMessage(message.id),
                                                                            className: "w-6 h-6 rounded-full bg-surface-600 border border-white/10\n                                           flex items-center justify-center hover:bg-red-600/30",
                                                                            title: "Delete",
                                                                            "aria-label": "Delete message",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 10,
                                                                                className: "text-gray-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/ChatInterface.tsx",
                                                                                lineNumber: 1065,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                                            lineNumber: 1058,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                                    lineNumber: 1048,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-center gap-1.5 px-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 10,
                                                            className: "text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-600",
                                                            children: new Date(message.timestamp).toLocaleTimeString([], {
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1074,
                                                            columnNumber: 23
                                                        }, this),
                                                        emotion !== 'neutral' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-xs ${emotionCfg.color}`,
                                                            children: emotionCfg.label.split(' ')[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ChatInterface.tsx",
                                                            lineNumber: 1078,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1072,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 985,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 972,
                                    columnNumber: 17
                                }, this);
                            }),
                            streamingContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2.5 animate-slide-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold\n                              bg-gradient-to-br from-primary-600 to-primary-800",
                                        children: "AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-[85%] flex flex-col gap-1 items-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed\n                                bg-surface-700/80 border border-primary-500/30 text-gray-200",
                                            children: [
                                                streamingContent,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block w-1.5 h-4 bg-primary-400 ml-0.5 align-middle animate-pulse rounded-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1099,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1095,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1090,
                                columnNumber: 13
                            }, this),
                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingIndicator, {}, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1104,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 954,
                        columnNumber: 9
                    }, this),
                    isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 rounded-full bg-surface-700 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "voice-level h-full",
                                style: {
                                    width: `${recordingLevel}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1111,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 1109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/8 px-4 py-3",
                        children: [
                            isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-red-400 font-medium animate-pulse",
                                        children: "REC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveformBars, {
                                        active: isRecording
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 ml-auto",
                                        children: "Tap stop when done"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: isRecording ? stopRecording : startRecording,
                                        disabled: isProcessing,
                                        "aria-label": isRecording ? 'Stop recording' : 'Start voice recording',
                                        "aria-pressed": isRecording,
                                        className: `relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
                transition-all duration-200 active:scale-95
                ${isRecording ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]' : 'bg-surface-700 hover:bg-surface-600 border border-white/10 hover:border-primary-500/40 text-gray-400 hover:text-white'}
                ${isProcessing ? 'opacity-40 cursor-not-allowed' : ''}
              `,
                                        children: [
                                            isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 30
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1140,
                                                columnNumber: 53
                                            }, this),
                                            isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatInterface.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: inputText,
                                            onChange: (e)=>setInputText(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    sendMessage();
                                                }
                                            },
                                            placeholder: isRecording ? 'Recording…' : 'Message your avatar… (Enter to send)',
                                            "aria-label": "Message your avatar",
                                            disabled: isProcessing || isRecording,
                                            rows: 1,
                                            className: "w-full px-4 py-2.5 rounded-xl bg-surface-700/80 border border-white/10 text-white text-sm\n                           placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50\n                           focus:border-primary-500/40 resize-none transition-all duration-200 disabled:opacity-50\n                           [field-sizing:content] max-h-32 overflow-y-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 13
                                    }, this),
                                    isProcessing || isSpeaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: stopGeneration,
                                        "aria-label": "Stop generating",
                                        title: "Stop",
                                        className: "flex-shrink-0 w-10 h-10 rounded-xl bg-red-600 hover:bg-red-500\n                           flex items-center justify-center text-white shadow-[0_0_18px_rgba(239,68,68,0.4)]\n                           transition-all duration-200 active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                            size: 16,
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1173,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1165,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: sendMessage,
                                        disabled: !inputText.trim() || isRecording,
                                        "aria-label": "Send message",
                                        className: "flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600\n                           flex items-center justify-center text-white hover:shadow-glow\n                           disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 active:scale-95",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 text-center mt-2",
                                children: [
                                    "Shift+Enter for new line · Mic for voice · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "px-1 py-0.5 rounded bg-surface-700 text-gray-500",
                                        children: "?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1190,
                                        columnNumber: 56
                                    }, this),
                                    " for shortcuts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatInterface.tsx",
                                lineNumber: 1189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatInterface.tsx",
                        lineNumber: 1116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 924,
                columnNumber: 7
            }, this),
            showShortcuts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-surface-950/80 backdrop-blur-sm",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "kbd-title",
                onClick: ()=>setShowShortcuts(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md mx-4 glass-card rounded-2xl p-6 animate-scale-in",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyboard$3e$__["Keyboard"], {
                                            size: 18,
                                            className: "text-primary-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            id: "kbd-title",
                                            className: "text-lg font-bold text-white",
                                            children: "Keyboard shortcuts"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowShortcuts(false),
                                    className: "btn-icon",
                                    "aria-label": "Close shortcuts",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatInterface.tsx",
                                        lineNumber: 1218,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1208,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divider mb-4"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2.5 text-sm",
                            children: [
                                {
                                    keys: [
                                        'Enter'
                                    ],
                                    desc: 'Send message'
                                },
                                {
                                    keys: [
                                        'Shift',
                                        'Enter'
                                    ],
                                    desc: 'New line in message'
                                },
                                {
                                    keys: [
                                        'Esc'
                                    ],
                                    desc: 'Cancel editing a message'
                                },
                                {
                                    keys: [
                                        '⌘',
                                        'E'
                                    ],
                                    desc: 'Mute / unmute avatar'
                                },
                                {
                                    keys: [
                                        '?'
                                    ],
                                    desc: 'Toggle this shortcuts panel'
                                }
                            ].map(({ keys, desc })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-300",
                                            children: desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1231,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: keys.map((k, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "px-2 py-0.5 rounded-md bg-surface-700 border border-white/10 text-xs text-gray-300 font-mono",
                                                    children: k
                                                }, i, false, {
                                                    fileName: "[project]/components/ChatInterface.tsx",
                                                    lineNumber: 1234,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatInterface.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, desc, true, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mt-4",
                            children: [
                                "On Windows/Linux, use ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-1 py-0.5 rounded bg-surface-700",
                                    children: "Ctrl"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 37
                                }, this),
                                " in place of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "px-1 py-0.5 rounded bg-surface-700",
                                    children: "⌘"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatInterface.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 112
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatInterface.tsx",
                            lineNumber: 1245,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatInterface.tsx",
                    lineNumber: 1204,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatInterface.tsx",
                lineNumber: 1197,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatInterface.tsx",
        lineNumber: 777,
        columnNumber: 5
    }, this);
}
_s(ChatInterface, "MzBctvuzSHKF0kZHT8u833LOgiw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c3 = ChatInterface;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "WaveformBars");
__turbopack_context__.k.register(_c1, "TypingIndicator");
__turbopack_context__.k.register(_c2, "IdleAvatar");
__turbopack_context__.k.register(_c3, "ChatInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatInterface.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ChatInterface.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ChatInterface_tsx_1yeo3gn._.js.map