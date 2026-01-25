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
            if (initialTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
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
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
            lineNumber: 39,
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
                lineNumber: 53,
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
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                        lineNumber: 58,
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
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-xl bg-white/30 dark:bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300"
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/components/ThemeToggle.tsx",
        lineNumber: 46,
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
"[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrganizationPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/lib/animations.ts [app-client] (ecmascript)");
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
;
;
function OrganizationPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [organization, setOrganization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCreateForm, setShowCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        key: '',
        description: ''
    });
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animation refs
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationPage.useEffect": ()=>{
            if (organization) {
                document.title = `${organization.name} | Flagship`;
            }
        }
    }["OrganizationPage.useEffect"], [
        organization
    ]);
    // Animations on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationPage.useEffect": ()=>{
            if (navRef.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"])(navRef.current, 0);
            if (headerRef.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideInBottom"])(headerRef.current, 200);
            if (contentRef.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"])(contentRef.current, 400);
            // Animate project cards after data loads
            setTimeout({
                "OrganizationPage.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerFadeIn"])('.project-card');
                }
            }["OrganizationPage.useEffect"], 600);
        }
    }["OrganizationPage.useEffect"], []);
    // Animate cards when projects change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationPage.useEffect": ()=>{
            if (projects.length > 0) {
                setTimeout({
                    "OrganizationPage.useEffect": ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerFadeIn"])('.project-card');
                    }
                }["OrganizationPage.useEffect"], 100);
            }
        }
    }["OrganizationPage.useEffect"], [
        projects
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "OrganizationPage.useEffect.unsubscribe": async (user)=>{
                    if (user) {
                        setUser(user);
                        await loadOrganization(slug);
                    } else {
                        router.push('/login');
                    }
                    setLoading(false);
                }
            }["OrganizationPage.useEffect.unsubscribe"]);
            return ({
                "OrganizationPage.useEffect": ()=>unsubscribe()
            })["OrganizationPage.useEffect"];
        }
    }["OrganizationPage.useEffect"], [
        router,
        slug
    ]);
    const loadOrganization = async (slug)=>{
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].ORGANIZATIONS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('slug', '==', slug));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (!snapshot.empty) {
                const orgData = {
                    id: snapshot.docs[0].id,
                    ...snapshot.docs[0].data()
                };
                setOrganization(orgData);
                await loadProjects(orgData.id);
            } else {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Error loading organization:', error);
        }
    };
    const loadProjects = async (orgId)=>{
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLLECTIONS"].PROJECTS), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('organizationId', '==', orgId));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const projectsList = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setProjects(projectsList);
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    };
    const handleCreateProject = async (e)=>{
        e.preventDefault();
        if (!user || !organization) return;
        setCreating(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$firestore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProject"])({
                organizationId: organization.id,
                name: formData.name,
                key: formData.key,
                description: formData.description,
                createdBy: user.uid
            });
            setFormData({
                name: '',
                key: '',
                description: ''
            });
            setShowCreateForm(false);
            await loadProjects(organization.id);
        } catch (error) {
            console.error('Error creating project:', error);
            alert('Hata: ' + error.message);
        } finally{
            setCreating(false);
        }
    };
    const generateKey = (name)=>{
        return name.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    };
    // Mount animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationPage.useEffect": ()=>{
            if (navRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"])(navRef.current, 0);
            }
            if (headerRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideInBottom"])(headerRef.current, 200);
            }
            if (contentRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideInBottom"])(contentRef.current, 400);
            }
            const projectCards = document.querySelectorAll('.project-card');
            if (projectCards.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerFadeIn"])('.project-card');
            }
        }
    }["OrganizationPage.useEffect"], []);
    // Projects change animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrganizationPage.useEffect": ()=>{
            const projectCards = document.querySelectorAll('.project-card');
            if (projectCards.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerFadeIn"])('.project-card');
            }
        }
    }["OrganizationPage.useEffect"], [
        projects
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "Yükleniyor..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this);
    }
    if (!organization) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: navRef,
                className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3 sm:space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/dashboard'),
                                        className: "flex items-center text-gray-600 dark:text-gray-300 hover:text-[#0066FF] dark:hover:text-[#3385FF] transition-colors text-sm sm:text-base font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "←"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: "Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 w-px bg-gray-300 dark:bg-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0066FF] to-[#00B8D4] bg-clip-text text-transparent",
                                                children: organization.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: "Organization"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-[#0066FF]/10 to-[#00B8D4]/10 dark:from-[#0066FF]/20 dark:to-[#00B8D4]/20 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-700 dark:text-gray-300",
                                                children: user?.email
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto py-8 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: headerRef,
                            className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2",
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-300",
                                            children: "Manage your feature flag projects"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCreateForm(!showCreateForm),
                                    className: "w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00B8D4] text-white rounded-lg hover:shadow-lg hover:shadow-[#0066FF]/40 font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105",
                                    children: showCreateForm ? '✕ Cancel' : '+ New Project'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                            lineNumber: 225,
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
                                                children: "Create New Project"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 243,
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
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleCreateProject,
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Project Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                lineNumber: 256,
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
                                                                placeholder: "Mobile App"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Project Key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                lineNumber: 275,
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
                                                                placeholder: "mobile-app"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "Description (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: formData.description,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                description: e.target.value
                                                            }),
                                                        className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-gray-900",
                                                        placeholder: "Describe your project...",
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 288,
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
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    className: "opacity-75",
                                                                    fill: "currentColor",
                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Creating..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 23
                                                }, this) : '✓ Create Project'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#0066FF]/10 to-[#00B8D4]/10 rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl",
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-900 mb-2",
                                    children: "No projects yet"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: "Create your first project to start managing feature flags"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 329,
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
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this),
                                        "Create Your First Project"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contentRef,
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>router.push(`/dashboard/${slug}/projects/${project.key}`),
                                    onMouseEnter: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHover"])(e.currentTarget),
                                    onMouseLeave: (e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$apps$2f$dashboard$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHoverEnd"])(e.currentTarget),
                                    className: "project-card group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#0066FF]/30 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 bg-gradient-to-r from-[#0066FF] to-[#00B8D4]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-bold text-gray-900 group-hover:text-[#0066FF] transition-colors truncate mb-1",
                                                                    children: project.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded",
                                                                    children: project.key
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-3 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0066FF]/10 to-[#00B8D4]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: "🚀"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this),
                                                project.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mb-4 line-clamp-2",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pt-4 border-t border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: project.createdAt?.toDate?.()?.toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            }) || 'New'
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#0066FF] group-hover:translate-x-1 transition-transform",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium mr-1",
                                                                    children: "Open"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5l7 7-7 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Proje Klosörü/React/flagship/apps/dashboard/app/dashboard/[slug]/page.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(OrganizationPage, "fVfxYJjyeUEE9M8SIMhZU3O3dU8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proje__Klos$f6$r$fc2f$React$2f$flagship$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrganizationPage;
var _c;
__turbopack_context__.k.register(_c, "OrganizationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Proje%20Klos%C3%B6r%C3%BC_React_flagship_apps_dashboard_f74182a2._.js.map