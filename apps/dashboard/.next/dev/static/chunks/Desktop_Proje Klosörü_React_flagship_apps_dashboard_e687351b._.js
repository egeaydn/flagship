(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyA38tq9hBov0OvDf0WkIO2EMQaG81ZtmEQ"),
    authDomain: ("TURBOPACK compile-time value", "flagship-2bd6d.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "flagship-2bd6d"),
    storageBucket: ("TURBOPACK compile-time value", "flagship-2bd6d.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "964714466914"),
    appId: ("TURBOPACK compile-time value", "1:964714466914:web:2a23c52c90f096203e4b3b")
};
// Initialize Firebase (singleton pattern)
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/firestore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLLECTIONS",
    ()=>COLLECTIONS,
    "createApiKey",
    ()=>createApiKey,
    "createAuditLog",
    ()=>createAuditLog,
    "createFeatureFlag",
    ()=>createFeatureFlag,
    "createOrganization",
    ()=>createOrganization,
    "createProject",
    ()=>createProject,
    "getAggregatedAnalytics",
    ()=>getAggregatedAnalytics,
    "getAuditLogs",
    ()=>getAuditLogs,
    "getEnvironmentApiKeys",
    ()=>getEnvironmentApiKeys,
    "getFlagAnalytics",
    ()=>getFlagAnalytics,
    "getUserOrganizations",
    ()=>getUserOrganizations,
    "recordFlagEvaluation",
    ()=>recordFlagEvaluation,
    "revokeApiKey",
    ()=>revokeApiKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/firebase.ts [app-client] (ecmascript)");
;
;
const COLLECTIONS = {
    ORGANIZATIONS: 'organizations',
    ORGANIZATION_MEMBERS: 'organization_members',
    PROJECTS: 'projects',
    ENVIRONMENTS: 'environments',
    FEATURE_FLAGS: 'feature_flags',
    FLAG_VALUES: 'flag_values',
    API_KEYS: 'api_keys',
    AUDIT_LOGS: 'audit_logs',
    FLAG_ANALYTICS: 'flag_analytics'
};
async function createOrganization(data) {
    const orgRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.ORGANIZATIONS), {
        ...data,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
    // Auto-create owner membership
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.ORGANIZATION_MEMBERS, `${data.createdBy}_${orgRef.id}`), {
        organizationId: orgRef.id,
        userId: data.createdBy,
        role: 'owner',
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
    return orgRef.id;
}
async function getUserOrganizations(userId) {
    const membersQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.ORGANIZATION_MEMBERS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
    const membersSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(membersQuery);
    const orgIds = membersSnap.docs.map((doc)=>doc.data().organizationId);
    if (orgIds.length === 0) return [];
    const orgsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.ORGANIZATIONS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('__name__', 'in', orgIds));
    const orgsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(orgsQuery);
    return orgsSnap.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
}
async function createProject(data) {
    const projectRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.PROJECTS), {
        ...data,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
    // Auto-create default environments
    const environments = [
        {
            name: 'Development',
            key: 'dev'
        },
        {
            name: 'Staging',
            key: 'staging'
        },
        {
            name: 'Production',
            key: 'prod'
        }
    ];
    for (const env of environments){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.ENVIRONMENTS), {
            projectId: projectRef.id,
            ...env,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
        });
    }
    return projectRef.id;
}
async function createFeatureFlag(data) {
    // Create the flag
    const flagRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.FEATURE_FLAGS), {
        ...data,
        tags: data.tags || [],
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
    // Get all environments for this project
    const envsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.ENVIRONMENTS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('projectId', '==', data.projectId));
    const envsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(envsQuery);
    // Create flag_values for each environment
    for (const envDoc of envsSnap.docs){
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.FLAG_VALUES), {
            flagId: flagRef.id,
            environmentId: envDoc.id,
            enabled: false,
            value: data.defaultValue,
            updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
        });
    }
    return flagRef;
}
async function createApiKey(data) {
    const bcrypt = (await __turbopack_context__.A("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/bcryptjs/index.js [app-client] (ecmascript, async loader)")).default;
    // Generate random key: fsk_{type}_{32-char-random}
    const randomPart = Array.from(crypto.getRandomValues(new Uint8Array(16))).map((b)=>b.toString(16).padStart(2, '0')).join('');
    const rawKey = `fsk_${data.keyType}_${randomPart}`;
    // Hash for storage
    const keyHash = await bcrypt.hash(rawKey, 10);
    // Prefix for quick lookup (first 12 chars)
    const keyPrefix = rawKey.substring(0, 12);
    // Store in Firestore
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.API_KEYS), {
        environmentId: data.environmentId,
        name: data.name,
        keyPrefix,
        keyHash,
        keyType: data.keyType,
        revoked: false,
        lastUsedAt: null,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        createdBy: data.createdBy
    });
    // Return raw key (shown ONCE)
    return rawKey;
}
async function revokeApiKey(keyId) {
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.API_KEYS, keyId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(keyRef, {
        revoked: true,
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
}
async function getEnvironmentApiKeys(environmentId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.API_KEYS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('environmentId', '==', environmentId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('revoked', '==', false));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
}
async function createAuditLog(data) {
    const logRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.AUDIT_LOGS), {
        ...data,
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
    // Trigger webhooks asynchronously (don't await to avoid slowing down audit log creation)
    if (data.projectId && data.action) {
        const { triggerWebhooks } = await __turbopack_context__.A("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/webhooks.ts [app-client] (ecmascript, async loader)");
        // Map audit log actions to webhook events
        const eventMap = {
            'FLAG_CREATED': 'flag.created',
            'FLAG_UPDATED': 'flag.updated',
            'FLAG_DELETED': 'flag.deleted',
            'FLAG_TOGGLED': 'flag.toggled',
            'TARGETING_RULES_UPDATED': 'targeting.updated'
        };
        const event = eventMap[data.action];
        if (event) {
            triggerWebhooks(data.projectId, event, {
                flagKey: data.metadata?.flagKey || data.resourceName,
                flagName: data.resourceName,
                action: data.action,
                actor: data.userEmail || 'Unknown',
                changes: data.changes,
                before: data.changes?.before,
                after: data.changes?.after
            }).catch((err)=>console.error('Webhook trigger error:', err));
        }
    }
    return logRef;
}
async function getAuditLogs(organizationId, limit = 100) {
    const logsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.AUDIT_LOGS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('organizationId', '==', organizationId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(logsQuery);
    const logs = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    // Sort by timestamp descending (newest first)
    return logs.sort((a, b)=>{
        const aTime = a.timestamp?.toMillis() || a.createdAt?.toMillis() || 0;
        const bTime = b.timestamp?.toMillis() || b.createdAt?.toMillis() || 0;
        return bTime - aTime;
    }).slice(0, limit);
}
async function recordFlagEvaluation(data) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.FLAG_ANALYTICS), {
        ...data,
        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    });
}
async function getFlagAnalytics(projectId, environmentId, days = 7) {
    const analyticsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], COLLECTIONS.FLAG_ANALYTICS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('environmentId', '==', environmentId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(analyticsQuery);
    const analytics = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    // Filter by date range (last N days)
    const cutoffTime = Date.now() - days * 24 * 60 * 60 * 1000;
    return analytics.filter((a)=>{
        const time = a.timestamp?.toMillis() || a.createdAt?.toMillis() || 0;
        return time >= cutoffTime;
    });
}
async function getAggregatedAnalytics(projectId, environmentId, days = 7) {
    const analytics = await getFlagAnalytics(projectId, environmentId, days);
    // Aggregate by flag
    const aggregated = {};
    analytics.forEach((entry)=>{
        const key = entry.flagKey;
        if (!aggregated[key]) {
            aggregated[key] = {
                flagKey: key,
                flagId: entry.flagId,
                evaluations: 0,
                uniqueUsers: new Set(),
                trueCount: 0,
                falseCount: 0,
                targetingAppliedCount: 0
            };
        }
        aggregated[key].evaluations++;
        if (entry.userId) {
            aggregated[key].uniqueUsers.add(entry.userId);
        }
        if (entry.result === true) aggregated[key].trueCount++;
        if (entry.result === false) aggregated[key].falseCount++;
        if (entry.targetingApplied) aggregated[key].targetingAppliedCount++;
    });
    // Convert Set to count
    return Object.values(aggregated).map((item)=>({
            ...item,
            uniqueUsers: item.uniqueUsers.size
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            // Check localStorage and system preference
            const savedTheme = localStorage.getItem('theme');
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const initialTheme = savedTheme || systemTheme;
            setTheme(initialTheme);
            document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
    // Avoid hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "relative p-3 rounded-xl bg-gray-200 dark:bg-gray-700 w-12 h-12 overflow-hidden border-2 border-gray-300 dark:border-gray-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Loading theme"
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "relative p-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border-2 border-gray-300 dark:border-gray-600 w-12 h-12",
        "aria-label": "Toggle theme",
        title: `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-yellow-100/30 dark:bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-6 h-6 absolute top-0 left-0 transition-all duration-500 ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'} text-gray-700 group-hover:text-gray-900`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-6 h-6 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'} text-yellow-400 group-hover:text-yellow-300 group-hover:rotate-180`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-xl bg-white/30 dark:bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300"
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "YCKE2uRMIshh/+RpyjK2SrKjidc=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DashboardNav({ user, organization, project }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    const isActive = (path)=>pathname?.includes(path);
    // Navigation items based on context
    const getNavItems = ()=>{
        if (project && organization) {
            // Project-level navigation
            return [
                {
                    name: 'Feature Flags',
                    icon: '🚩',
                    href: `/dashboard/${organization.slug}/projects/${project.key}`,
                    active: pathname === `/dashboard/${organization.slug}/projects/${project.key}`
                },
                {
                    name: 'Analytics',
                    icon: '📊',
                    href: `/dashboard/${organization.slug}/projects/${project.key}/analytics`,
                    active: isActive('/analytics')
                },
                {
                    name: 'Webhooks',
                    icon: '🪝',
                    href: `/dashboard/${organization.slug}/projects/${project.key}/webhooks`,
                    active: isActive('/webhooks')
                },
                {
                    name: 'API Keys',
                    icon: '🔑',
                    href: `/dashboard/${organization.slug}/projects/${project.key}/api-keys`,
                    active: isActive('/api-keys')
                },
                {
                    name: 'Audit Logs',
                    icon: '📋',
                    href: `/dashboard/${organization.slug}/audit-logs`,
                    active: isActive('/audit-logs')
                }
            ];
        } else if (organization) {
            // Organization-level navigation
            return [
                {
                    name: 'Projects',
                    icon: '📦',
                    href: `/dashboard/${organization.slug}`,
                    active: pathname === `/dashboard/${organization.slug}`
                },
                {
                    name: 'Audit Logs',
                    icon: '📋',
                    href: `/dashboard/${organization.slug}/audit-logs`,
                    active: isActive('/audit-logs')
                }
            ];
        } else {
            // Root dashboard navigation
            return [
                {
                    name: 'Organizations',
                    icon: '🏢',
                    href: '/dashboard',
                    active: pathname === '/dashboard'
                }
            ];
        }
    };
    const navItems = getNavItems();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(!sidebarOpen),
                                        className: "lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        className: "flex items-center space-x-2 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/FlagShip-logo-transparent.png",
                                                alt: "Flagship Logo",
                                                className: "w-14 h-14 object-contain group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-[#0066FF] to-[#00B8D4] bg-clip-text text-transparent",
                                                    children: "Flagship"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center space-x-2 text-sm",
                                        children: [
                                            organization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 dark:text-gray-500",
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/dashboard/${organization.slug}`,
                                                        className: "text-gray-600 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-[#3385FF] transition-colors font-medium truncate max-w-[150px]",
                                                        children: organization.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            project && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 dark:text-gray-500",
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/dashboard/${organization?.slug}/projects/${project.key}`,
                                                        className: "text-gray-600 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-[#3385FF] transition-colors font-medium truncate max-w-[150px]",
                                                        children: project.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-[#0066FF]/10 to-[#00B8D4]/10 dark:from-[#0066FF]/20 dark:to-[#00B8D4]/20 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-700 dark:text-gray-300 truncate max-w-[150px]",
                                                children: user?.email
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:shadow-red-500/40 rounded-lg transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Sign Out"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
                onClick: ()=>setSidebarOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-xl p-6 animate-fadeIn",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white",
                                    children: "Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSidebarOpen(false),
                                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "space-y-2",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setSidebarOpen(false),
                                    className: `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${item.active ? 'bg-gradient-to-r from-[#0066FF] to-[#00B8D4] text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this),
            navItems.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block bg-white border-b border-gray-200 sticky top-16 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex space-x-1 py-3",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `flex items-center space-x-2 px-4 py-2 rounded-lg transition-all font-medium text-sm ${item.active ? 'bg-gradient-to-r from-[#0066FF] to-[#00B8D4] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 251,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                        lineNumber: 252,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                                lineNumber: 242,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                        lineNumber: 240,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DashboardNav, "qOHKSXHWxFv71pxtaORi8A0NR8k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardNav;
var _c;
__turbopack_context__.k.register(_c, "DashboardNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/animations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Client-side only anime.js wrapper with dynamic imports
__turbopack_context__.s([
    "animateGradient",
    ()=>animateGradient,
    "animateNumber",
    ()=>animateNumber,
    "bounceIn",
    ()=>bounceIn,
    "buttonRipple",
    ()=>buttonRipple,
    "cardHover",
    ()=>cardHover,
    "cardHoverEnd",
    ()=>cardHoverEnd,
    "fadeIn",
    ()=>fadeIn,
    "fadeInLeft",
    ()=>fadeInLeft,
    "fadeInRight",
    ()=>fadeInRight,
    "pageTransition",
    ()=>pageTransition,
    "pulse",
    ()=>pulse,
    "rotate",
    ()=>rotate,
    "scaleIn",
    ()=>scaleIn,
    "shake",
    ()=>shake,
    "slideInBottom",
    ()=>slideInBottom,
    "staggerFadeIn",
    ()=>staggerFadeIn,
    "waveText",
    ()=>waveText
]);
const isBrowser = ("TURBOPACK compile-time value", "object") !== 'undefined';
// Dynamically import anime.js v3 only on client side
let animePromise = null;
const loadAnime = ()=>{
    if (!animePromise && isBrowser) {
        animePromise = __turbopack_context__.A("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/animejs/lib/anime.es.js [app-client] (ecmascript, async loader)").then((mod)=>mod.default);
    }
    return animePromise;
};
const fadeIn = (targets, delay = 0)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            translateY: [
                20,
                0
            ],
            duration: 800,
            delay,
            easing: 'easeOutCubic'
        });
    });
};
const fadeInLeft = (targets, delay = 0)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            translateX: [
                -50,
                0
            ],
            duration: 800,
            delay,
            easing: 'easeOutCubic'
        });
    });
};
const fadeInRight = (targets, delay = 0)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            translateX: [
                50,
                0
            ],
            duration: 800,
            delay,
            easing: 'easeOutCubic'
        });
    });
};
const scaleIn = (targets, delay = 0)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            scale: [
                0.8,
                1
            ],
            duration: 600,
            delay,
            easing: 'easeOutElastic(1, .6)'
        });
    });
};
const staggerFadeIn = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            translateY: [
                30,
                0
            ],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutCubic'
        });
    });
};
const cardHover = (element)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets: element,
            scale: 1.05,
            translateY: -8,
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
};
const cardHoverEnd = (element)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets: element,
            scale: 1,
            translateY: 0,
            duration: 300,
            easing: 'easeOutCubic'
        });
    });
};
const pulse = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            scale: [
                1,
                1.1,
                1
            ],
            duration: 1000,
            easing: 'easeInOutQuad',
            loop: true
        });
    });
};
const rotate = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            rotate: '1turn',
            duration: 2000,
            easing: 'linear',
            loop: true
        });
    });
};
const slideInBottom = (targets, delay = 0)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            translateY: [
                100,
                0
            ],
            duration: 1000,
            delay,
            easing: 'easeOutExpo'
        });
    });
};
const bounceIn = (targets, delay = 0)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            opacity: [
                0,
                1
            ],
            scale: [
                0.3,
                1
            ],
            duration: 800,
            delay,
            easing: 'easeOutElastic(1, .5)'
        });
    });
};
const shake = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            translateX: [
                {
                    value: -10,
                    duration: 100
                },
                {
                    value: 10,
                    duration: 100
                },
                {
                    value: -10,
                    duration: 100
                },
                {
                    value: 10,
                    duration: 100
                },
                {
                    value: 0,
                    duration: 100
                }
            ],
            easing: 'easeInOutSine'
        });
    });
};
const waveText = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const textWrapper = document.querySelector(targets);
    if (textWrapper && textWrapper.textContent) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        loadAnime()?.then((anime)=>{
            anime.timeline().add({
                targets: `${targets} .letter`,
                translateY: [
                    -100,
                    0
                ],
                opacity: [
                    0,
                    1
                ],
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i)=>30 * i
            });
        });
    }
};
const pageTransition = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime.timeline().add({
            targets,
            opacity: [
                0,
                1
            ],
            duration: 600,
            easing: 'easeOutCubic'
        }).add({
            targets: `${targets} > *`,
            opacity: [
                0,
                1
            ],
            translateY: [
                20,
                0
            ],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutCubic'
        }, '-=400');
    });
};
const buttonRipple = (e)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
    position: absolute;
    left: ${x}px;
    top: ${y}px;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: translate(-50%, -50%);
    pointer-events: none;
  `;
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    loadAnime()?.then((anime)=>{
        anime({
            targets: ripple,
            width: Math.max(rect.width, rect.height) * 2,
            height: Math.max(rect.width, rect.height) * 2,
            opacity: [
                0.6,
                0
            ],
            duration: 600,
            easing: 'easeOutQuad',
            complete: ()=>ripple.remove()
        });
    });
};
const animateNumber = (element, target, duration = 2000)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const obj = {
        value: 0
    };
    loadAnime()?.then((anime)=>{
        anime({
            targets: obj,
            value: target,
            duration,
            easing: 'easeOutExpo',
            round: 1,
            update: ()=>{
                element.textContent = obj.value.toLocaleString();
            }
        });
    });
};
const animateGradient = (targets)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    loadAnime()?.then((anime)=>{
        anime({
            targets,
            background: [
                'linear-gradient(45deg, #0066FF, #00B8D4)',
                'linear-gradient(135deg, #00B8D4, #0066FF)',
                'linear-gradient(225deg, #0066FF, #00B8D4)',
                'linear-gradient(315deg, #00B8D4, #0066FF)',
                'linear-gradient(45deg, #0066FF, #00B8D4)'
            ],
            duration: 8000,
            easing: 'linear',
            loop: true
        });
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/firestore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$components$2f$DashboardNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/DashboardNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function ProjectPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const projectKey = params.projectKey;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [organization, setOrganization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [environments, setEnvironments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedEnv, setSelectedEnv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [flags, setFlags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [flagValues, setFlagValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCreateForm, setShowCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [togglingFlag, setTogglingFlag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        key: '',
        description: '',
        flagType: 'boolean',
        defaultValue: false
    });
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animation refs
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            if (project) {
                document.title = `${project.name} | Flagship`;
            }
        }
    }["ProjectPage.useEffect"], [
        project
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "ProjectPage.useEffect.unsubscribe": async (user)=>{
                    if (user) {
                        setUser(user);
                        await loadProject();
                    } else {
                        router.push('/login');
                    }
                    setLoading(false);
                }
            }["ProjectPage.useEffect.unsubscribe"]);
            return ({
                "ProjectPage.useEffect": ()=>unsubscribe()
            })["ProjectPage.useEffect"];
        }
    }["ProjectPage.useEffect"], [
        router,
        projectKey
    ]);
    const loadProject = async ()=>{
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].PROJECTS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('key', '==', projectKey));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (!snapshot.empty) {
                const projectData = {
                    id: snapshot.docs[0].id,
                    ...snapshot.docs[0].data()
                };
                setProject(projectData);
                // Load organization
                const orgQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ORGANIZATIONS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('slug', '==', slug));
                const orgSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(orgQ);
                if (!orgSnapshot.empty) {
                    setOrganization({
                        id: orgSnapshot.docs[0].id,
                        ...orgSnapshot.docs[0].data()
                    });
                }
                await loadEnvironments(projectData.id);
                await loadFlags(projectData.id);
            } else {
                router.push(`/dashboard/${slug}`);
            }
        } catch (error) {
            console.error('Error loading project:', error);
        }
    };
    const loadEnvironments = async (projectId)=>{
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ENVIRONMENTS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const envList = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setEnvironments(envList);
            if (envList.length > 0) {
                setSelectedEnv(envList[0].id);
            }
        } catch (error) {
            console.error('Error loading environments:', error);
        }
    };
    const loadFlags = async (projectId)=>{
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].FEATURE_FLAGS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const flagsList = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setFlags(flagsList);
            // Load flag values
            const valuesQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].FLAG_VALUES));
            const valuesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(valuesQ);
            const valuesList = valuesSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setFlagValues(valuesList);
        } catch (error) {
            console.error('Error loading flags:', error);
        }
    };
    const handleCreateFlag = async (e)=>{
        e.preventDefault();
        if (!user || !project) return;
        setCreating(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFeatureFlag"])({
                projectId: project.id,
                name: formData.name,
                key: formData.key,
                description: formData.description,
                flagType: formData.flagType,
                defaultValue: formData.defaultValue,
                createdBy: user.uid
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`✅ Flag "${formData.name}" created successfully!`);
            setFormData({
                name: '',
                key: '',
                description: '',
                flagType: 'boolean',
                defaultValue: false
            });
            setShowCreateForm(false);
            await loadFlags(project.id);
        } catch (error) {
            console.error('Error creating flag:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(`❌ Failed to create flag: ${error.message}`);
        } finally{
            setCreating(false);
        }
    };
    // Mount animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            if (headerRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"])(headerRef.current, 0);
            }
            if (contentRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideInBottom"])(contentRef.current, 200);
            }
        }
    }["ProjectPage.useEffect"], []);
    // Flags change animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            const flagCards = document.querySelectorAll('.flag-card');
            if (flagCards.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerFadeIn"])('.flag-card');
            }
        }
    }["ProjectPage.useEffect"], [
        flags
    ]);
    const toggleFlag = async (flagId, currentValue)=>{
        if (!selectedEnv || !user || !project) return;
        setTogglingFlag(flagId);
        try {
            const flagValue = flagValues.find((fv)=>fv.flagId === flagId && fv.environmentId === selectedEnv);
            const flag = flags.find((f)=>f.id === flagId);
            const newValue = !currentValue;
            if (flagValue && flag) {
                // Update flag value
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].FLAG_VALUES, flagValue.id), {
                    enabled: newValue,
                    updatedAt: new Date()
                });
                // Create audit log
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuditLog"])({
                    organizationId: project.organizationId,
                    projectId: project.id,
                    environmentId: selectedEnv,
                    userId: user.uid,
                    userEmail: user.email || 'unknown',
                    action: newValue ? 'FLAG_ENABLED' : 'FLAG_DISABLED',
                    resourceType: 'flag',
                    resourceId: flagId,
                    resourceName: flag.name,
                    changes: {
                        before: {
                            enabled: currentValue
                        },
                        after: {
                            enabled: newValue
                        }
                    }
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`${newValue ? '✅ Flag enabled' : '⏸️ Flag disabled'}`);
            await loadFlags(project.id);
        } catch (error) {
            console.error('Error toggling flag:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('❌ Failed to toggle flag');
        } finally{
            setTogglingFlag(null);
        }
    };
    const getFlagValue = (flagId)=>{
        return flagValues.find((fv)=>fv.flagId === flagId && fv.environmentId === selectedEnv);
    };
    const generateKey = (name)=>{
        return name.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "Yükleniyor..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
            lineNumber: 265,
            columnNumber: 7
        }, this);
    }
    if (!project) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$components$2f$DashboardNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                user: user,
                organization: organization ? {
                    name: organization.name,
                    slug: organization.slug
                } : undefined,
                project: project ? {
                    name: project.name,
                    key: project.key
                } : undefined
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto py-8 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-3",
                                    children: "Environment"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: environments.map((env)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedEnv(env.id),
                                            className: `px-4 sm:px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${selectedEnv === env.id ? 'bg-gradient-to-r from-[#0066FF] to-[#00B8D4] text-white shadow-lg shadow-[#0066FF]/30' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#0066FF]/30 hover:shadow-md'}`,
                                            children: env.name
                                        }, env.id, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: headerRef,
                            className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2",
                                            children: "Feature Flags"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-300",
                                            children: "Manage and control your feature flags"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCreateForm(!showCreateForm),
                                    className: "w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00B8D4] text-white rounded-lg hover:shadow-lg hover:shadow-[#0066FF]/40 font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105",
                                    children: showCreateForm ? '✕ Cancel' : '+ New Flag'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        showCreateForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 animate-fadeIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-900",
                                                children: "Create New Feature Flag"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowCreateForm(false),
                                                className: "text-gray-400 hover:text-gray-600 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleCreateFlag,
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Flag Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: formData.name,
                                                                onChange: (e)=>{
                                                                    setFormData({
                                                                        ...formData,
                                                                        name: e.target.value,
                                                                        key: generateKey(e.target.value)
                                                                    });
                                                                },
                                                                className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-gray-900",
                                                                placeholder: "Dark Mode"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Flag Key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                required: true,
                                                                value: formData.key,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        key: e.target.value
                                                                    }),
                                                                className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-gray-900 font-mono text-sm",
                                                                placeholder: "dark-mode"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: formData.description,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                description: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-gray-900",
                                                        placeholder: "Describe what this flag controls...",
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Flag Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.flagType,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                flagType: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-gray-900",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "boolean",
                                                                children: "Boolean (true/false)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "number",
                                                                children: "Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "json",
                                                                children: "JSON"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "multivariate",
                                                                children: "Multivariate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: creating,
                                                className: "w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/40 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]",
                                                children: creating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    className: "opacity-25",
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Creating..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 23
                                                }, this) : '✓ Create Flag'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                lineNumber: 323,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        flags.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#0066FF]/10 to-[#00B8D4]/10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: "🚩"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                        lineNumber: 423,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-900 mb-2",
                                    children: "No feature flags yet"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Get started by creating your first feature flag"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCreateForm(true),
                                    className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00B8D4] text-white rounded-lg hover:shadow-lg hover:shadow-[#0066FF]/40 font-semibold transition-all duration-300 transform hover:scale-105",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        "Create Your First Flag"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contentRef,
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                            children: flags.map((flag)=>{
                                const flagValue = getFlagValue(flag.id);
                                const isEnabled = flagValue?.enabled || false;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flag-card group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0066FF]/30 cursor-pointer",
                                    onMouseEnter: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHover"])(e.currentTarget),
                                    onMouseLeave: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverEnd"])(e.currentTarget),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>router.push(`/dashboard/${params.slug}/projects/${params.projectKey}/flags/${flag.key}`),
                                            className: "p-6 pb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors truncate mb-1",
                                                                    children: flag.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 27
                                                                }, this),
                                                                flag.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 line-clamp-2",
                                                                    children: flag.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `ml-3 px-3 py-1 rounded-full text-xs font-semibold ${isEnabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`,
                                                            children: isEnabled ? '● Active' : '○ Inactive'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "text-xs font-mono text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200",
                                                            children: flag.key
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded",
                                                            children: flag.flagType
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: togglingFlag === flag.id ? 'Updating...' : 'Toggle Flag'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        toggleFlag(flag.id, isEnabled);
                                                    },
                                                    disabled: togglingFlag === flag.id,
                                                    className: `relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${isEnabled ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/30' : 'bg-gray-300'}`,
                                                    children: togglingFlag === flag.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block h-5 w-5 rounded-full bg-white animate-pulse mx-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-md ${isEnabled ? 'translate-x-8' : 'translate-x-1'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, flag.id, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/projects/[projectKey]/page.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
_s(ProjectPage, "R63ePb5stKgMFrqI/tHfKZT8mmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Proje%20Klos%C3%B6r%C3%BC_React_flagship_apps_dashboard_e687351b._.js.map