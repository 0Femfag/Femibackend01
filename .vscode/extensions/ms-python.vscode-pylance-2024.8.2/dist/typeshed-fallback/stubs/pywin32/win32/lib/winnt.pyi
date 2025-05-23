from _typeshed import Incomplete

APPLICATION_ERROR_MASK: int
ERROR_SEVERITY_SUCCESS: int
ERROR_SEVERITY_INFORMATIONAL: int
ERROR_SEVERITY_WARNING: int
ERROR_SEVERITY_ERROR: int
MINCHAR: int
MAXCHAR: int
MINSHORT: int
MAXSHORT: int
MINLONG: int
MAXLONG: int
MAXBYTE: int
MAXWORD: int
MAXDWORD: int
LANG_NEUTRAL: int
LANG_AFRIKAANS: int
LANG_ALBANIAN: int
LANG_ARABIC: int
LANG_BASQUE: int
LANG_BELARUSIAN: int
LANG_BULGARIAN: int
LANG_CATALAN: int
LANG_CHINESE: int
LANG_CROATIAN: int
LANG_CZECH: int
LANG_DANISH: int
LANG_DUTCH: int
LANG_ENGLISH: int
LANG_ESTONIAN: int
LANG_FAEROESE: int
LANG_FARSI: int
LANG_FINNISH: int
LANG_FRENCH: int
LANG_GERMAN: int
LANG_GREEK: int
LANG_HEBREW: int
LANG_HINDI: int
LANG_HUNGARIAN: int
LANG_ICELANDIC: int
LANG_INDONESIAN: int
LANG_ITALIAN: int
LANG_JAPANESE: int
LANG_KOREAN: int
LANG_LATVIAN: int
LANG_LITHUANIAN: int
LANG_MACEDONIAN: int
LANG_MALAY: int
LANG_NORWEGIAN: int
LANG_POLISH: int
LANG_PORTUGUESE: int
LANG_ROMANIAN: int
LANG_RUSSIAN: int
LANG_SERBIAN: int
LANG_SLOVAK: int
LANG_SLOVENIAN: int
LANG_SPANISH: int
LANG_SWAHILI: int
LANG_SWEDISH: int
LANG_THAI: int
LANG_TURKISH: int
LANG_UKRAINIAN: int
LANG_VIETNAMESE: int
SUBLANG_NEUTRAL: int
SUBLANG_DEFAULT: int
SUBLANG_SYS_DEFAULT: int
SUBLANG_ARABIC_SAUDI_ARABIA: int
SUBLANG_ARABIC_IRAQ: int
SUBLANG_ARABIC_EGYPT: int
SUBLANG_ARABIC_LIBYA: int
SUBLANG_ARABIC_ALGERIA: int
SUBLANG_ARABIC_MOROCCO: int
SUBLANG_ARABIC_TUNISIA: int
SUBLANG_ARABIC_OMAN: int
SUBLANG_ARABIC_YEMEN: int
SUBLANG_ARABIC_SYRIA: int
SUBLANG_ARABIC_JORDAN: int
SUBLANG_ARABIC_LEBANON: int
SUBLANG_ARABIC_KUWAIT: int
SUBLANG_ARABIC_UAE: int
SUBLANG_ARABIC_BAHRAIN: int
SUBLANG_ARABIC_QATAR: int
SUBLANG_CHINESE_TRADITIONAL: int
SUBLANG_CHINESE_SIMPLIFIED: int
SUBLANG_CHINESE_HONGKONG: int
SUBLANG_CHINESE_SINGAPORE: int
SUBLANG_CHINESE_MACAU: int
SUBLANG_DUTCH: int
SUBLANG_DUTCH_BELGIAN: int
SUBLANG_ENGLISH_US: int
SUBLANG_ENGLISH_UK: int
SUBLANG_ENGLISH_AUS: int
SUBLANG_ENGLISH_CAN: int
SUBLANG_ENGLISH_NZ: int
SUBLANG_ENGLISH_EIRE: int
SUBLANG_ENGLISH_SOUTH_AFRICA: int
SUBLANG_ENGLISH_JAMAICA: int
SUBLANG_ENGLISH_CARIBBEAN: int
SUBLANG_ENGLISH_BELIZE: int
SUBLANG_ENGLISH_TRINIDAD: int
SUBLANG_ENGLISH_ZIMBABWE: int
SUBLANG_ENGLISH_PHILIPPINES: int
SUBLANG_FRENCH: int
SUBLANG_FRENCH_BELGIAN: int
SUBLANG_FRENCH_CANADIAN: int
SUBLANG_FRENCH_SWISS: int
SUBLANG_FRENCH_LUXEMBOURG: int
SUBLANG_FRENCH_MONACO: int
SUBLANG_GERMAN: int
SUBLANG_GERMAN_SWISS: int
SUBLANG_GERMAN_AUSTRIAN: int
SUBLANG_GERMAN_LUXEMBOURG: int
SUBLANG_GERMAN_LIECHTENSTEIN: int
SUBLANG_ITALIAN: int
SUBLANG_ITALIAN_SWISS: int
SUBLANG_KOREAN: int
SUBLANG_KOREAN_JOHAB: int
SUBLANG_LITHUANIAN: int
SUBLANG_LITHUANIAN_CLASSIC: int
SUBLANG_MALAY_MALAYSIA: int
SUBLANG_MALAY_BRUNEI_DARUSSALAM: int
SUBLANG_NORWEGIAN_BOKMAL: int
SUBLANG_NORWEGIAN_NYNORSK: int
SUBLANG_PORTUGUESE: int
SUBLANG_PORTUGUESE_BRAZILIAN: int
SUBLANG_SERBIAN_LATIN: int
SUBLANG_SERBIAN_CYRILLIC: int
SUBLANG_SPANISH: int
SUBLANG_SPANISH_MEXICAN: int
SUBLANG_SPANISH_MODERN: int
SUBLANG_SPANISH_GUATEMALA: int
SUBLANG_SPANISH_COSTA_RICA: int
SUBLANG_SPANISH_PANAMA: int
SUBLANG_SPANISH_DOMINICAN_REPUBLIC: int
SUBLANG_SPANISH_VENEZUELA: int
SUBLANG_SPANISH_COLOMBIA: int
SUBLANG_SPANISH_PERU: int
SUBLANG_SPANISH_ARGENTINA: int
SUBLANG_SPANISH_ECUADOR: int
SUBLANG_SPANISH_CHILE: int
SUBLANG_SPANISH_URUGUAY: int
SUBLANG_SPANISH_PARAGUAY: int
SUBLANG_SPANISH_BOLIVIA: int
SUBLANG_SPANISH_EL_SALVADOR: int
SUBLANG_SPANISH_HONDURAS: int
SUBLANG_SPANISH_NICARAGUA: int
SUBLANG_SPANISH_PUERTO_RICO: int
SUBLANG_SWEDISH: int
SUBLANG_SWEDISH_FINLAND: int
SORT_DEFAULT: int
SORT_JAPANESE_XJIS: int
SORT_JAPANESE_UNICODE: int
SORT_CHINESE_BIG5: int
SORT_CHINESE_PRCP: int
SORT_CHINESE_UNICODE: int
SORT_CHINESE_PRC: int
SORT_KOREAN_KSC: int
SORT_KOREAN_UNICODE: int
SORT_GERMAN_PHONE_BOOK: int

def PRIMARYLANGID(lgid): ...
def SUBLANGID(lgid): ...

NLS_VALID_LOCALE_MASK: int

def LANGIDFROMLCID(lcid): ...
def SORTIDFROMLCID(lcid): ...
def UNREFERENCED_PARAMETER(P): ...
def DBG_UNREFERENCED_PARAMETER(P): ...
def DBG_UNREFERENCED_LOCAL_VARIABLE(V): ...

MAXIMUM_WAIT_OBJECTS: int
MAXIMUM_SUSPEND_COUNT: int
EXCEPTION_NONCONTINUABLE: int
EXCEPTION_MAXIMUM_PARAMETERS: int
PROCESS_TERMINATE: int
PROCESS_CREATE_THREAD: int
PROCESS_VM_OPERATION: int
PROCESS_VM_READ: int
PROCESS_VM_WRITE: int
PROCESS_DUP_HANDLE: int
PROCESS_CREATE_PROCESS: int
PROCESS_SET_QUOTA: int
PROCESS_SET_INFORMATION: int
PROCESS_QUERY_INFORMATION: int
PROCESS_SUSPEND_RESUME: int
PROCESS_QUERY_LIMITED_INFORMATION: int
PROCESS_SET_LIMITED_INFORMATION: int
MAXIMUM_PROCESSORS: int
THREAD_TERMINATE: int
THREAD_SUSPEND_RESUME: int
THREAD_GET_CONTEXT: int
THREAD_SET_CONTEXT: int
THREAD_SET_INFORMATION: int
THREAD_QUERY_INFORMATION: int
THREAD_SET_THREAD_TOKEN: int
THREAD_IMPERSONATE: int
THREAD_DIRECT_IMPERSONATION: int
THREAD_SET_LIMITED_INFORMATION: int
THREAD_QUERY_LIMITED_INFORMATION: int
THREAD_RESUME: int
JOB_OBJECT_ASSIGN_PROCESS: int
JOB_OBJECT_SET_ATTRIBUTES: int
JOB_OBJECT_QUERY: int
JOB_OBJECT_TERMINATE: int
TLS_MINIMUM_AVAILABLE: int
THREAD_BASE_PRIORITY_LOWRT: int
THREAD_BASE_PRIORITY_MAX: int
THREAD_BASE_PRIORITY_MIN: int
THREAD_BASE_PRIORITY_IDLE: int
JOB_OBJECT_LIMIT_WORKINGSET: int
JOB_OBJECT_LIMIT_PROCESS_TIME: int
JOB_OBJECT_LIMIT_JOB_TIME: int
JOB_OBJECT_LIMIT_ACTIVE_PROCESS: int
JOB_OBJECT_LIMIT_AFFINITY: int
JOB_OBJECT_LIMIT_PRIORITY_CLASS: int
JOB_OBJECT_LIMIT_VALID_FLAGS: int
EVENT_MODIFY_STATE: int
MUTANT_QUERY_STATE: int
SEMAPHORE_MODIFY_STATE: int
TIME_ZONE_ID_UNKNOWN: int
TIME_ZONE_ID_STANDARD: int
TIME_ZONE_ID_DAYLIGHT: int
PROCESSOR_INTEL_386: int
PROCESSOR_INTEL_486: int
PROCESSOR_INTEL_PENTIUM: int
PROCESSOR_MIPS_R4000: int
PROCESSOR_ALPHA_21064: int
PROCESSOR_HITACHI_SH3: int
PROCESSOR_HITACHI_SH3E: int
PROCESSOR_HITACHI_SH4: int
PROCESSOR_MOTOROLA_821: int
PROCESSOR_ARM_7TDMI: int
PROCESSOR_ARCHITECTURE_INTEL: int
PROCESSOR_ARCHITECTURE_MIPS: int
PROCESSOR_ARCHITECTURE_ALPHA: int
PROCESSOR_ARCHITECTURE_PPC: int
PROCESSOR_ARCHITECTURE_SH: int
PROCESSOR_ARCHITECTURE_ARM: int
PROCESSOR_ARCHITECTURE_IA64: int
PROCESSOR_ARCHITECTURE_ALPHA64: int
PROCESSOR_ARCHITECTURE_MSIL: int
PROCESSOR_ARCHITECTURE_AMD64: int
PROCESSOR_ARCHITECTURE_IA32_ON_WIN64: int
PROCESSOR_ARCHITECTURE_UNKNOWN: int
PF_FLOATING_POINT_PRECISION_ERRATA: int
PF_FLOATING_POINT_EMULATED: int
PF_COMPARE_EXCHANGE_DOUBLE: int
PF_MMX_INSTRUCTIONS_AVAILABLE: int
PF_PPC_MOVEMEM_64BIT_OK: int
PF_ALPHA_BYTE_INSTRUCTIONS: int
SECTION_QUERY: int
SECTION_MAP_WRITE: int
SECTION_MAP_READ: int
SECTION_MAP_EXECUTE: int
SECTION_EXTEND_SIZE: int
PAGE_NOACCESS: int
PAGE_READONLY: int
PAGE_READWRITE: int
PAGE_WRITECOPY: int
PAGE_EXECUTE: int
PAGE_EXECUTE_READ: int
PAGE_EXECUTE_READWRITE: int
PAGE_EXECUTE_WRITECOPY: int
PAGE_GUARD: int
PAGE_NOCACHE: int
MEM_COMMIT: int
MEM_RESERVE: int
MEM_DECOMMIT: int
MEM_RELEASE: int
MEM_FREE: int
MEM_PRIVATE: int
MEM_MAPPED: int
MEM_RESET: int
MEM_TOP_DOWN: int
MEM_4MB_PAGES: int
SEC_FILE: int
SEC_IMAGE: int
SEC_VLM: int
SEC_RESERVE: int
SEC_COMMIT: int
SEC_NOCACHE: int
MEM_IMAGE: int
FILE_READ_DATA: int
FILE_LIST_DIRECTORY: int
FILE_WRITE_DATA: int
FILE_ADD_FILE: int
FILE_APPEND_DATA: int
FILE_ADD_SUBDIRECTORY: int
FILE_CREATE_PIPE_INSTANCE: int
FILE_READ_EA: int
FILE_WRITE_EA: int
FILE_EXECUTE: int
FILE_TRAVERSE: int
FILE_DELETE_CHILD: int
FILE_READ_ATTRIBUTES: int
FILE_WRITE_ATTRIBUTES: int
FILE_SHARE_READ: int
FILE_SHARE_WRITE: int
FILE_SHARE_DELETE: int
FILE_ATTRIBUTE_READONLY: int
FILE_ATTRIBUTE_HIDDEN: int
FILE_ATTRIBUTE_SYSTEM: int
FILE_ATTRIBUTE_DIRECTORY: int
FILE_ATTRIBUTE_ARCHIVE: int
FILE_ATTRIBUTE_DEVICE: int
FILE_ATTRIBUTE_NORMAL: int
FILE_ATTRIBUTE_TEMPORARY: int
FILE_ATTRIBUTE_SPARSE_FILE: int
FILE_ATTRIBUTE_REPARSE_POINT: int
FILE_ATTRIBUTE_COMPRESSED: int
FILE_ATTRIBUTE_OFFLINE: int
FILE_ATTRIBUTE_NOT_CONTENT_INDEXED: int
FILE_ATTRIBUTE_ENCRYPTED: int
FILE_ATTRIBUTE_VIRTUAL: int
FILE_NOTIFY_CHANGE_FILE_NAME: int
FILE_NOTIFY_CHANGE_DIR_NAME: int
FILE_NOTIFY_CHANGE_ATTRIBUTES: int
FILE_NOTIFY_CHANGE_SIZE: int
FILE_NOTIFY_CHANGE_LAST_WRITE: int
FILE_NOTIFY_CHANGE_LAST_ACCESS: int
FILE_NOTIFY_CHANGE_CREATION: int
FILE_NOTIFY_CHANGE_SECURITY: int
FILE_ACTION_ADDED: int
FILE_ACTION_REMOVED: int
FILE_ACTION_MODIFIED: int
FILE_ACTION_RENAMED_OLD_NAME: int
FILE_ACTION_RENAMED_NEW_NAME: int
FILE_CASE_SENSITIVE_SEARCH: int
FILE_CASE_PRESERVED_NAMES: int
FILE_UNICODE_ON_DISK: int
FILE_PERSISTENT_ACLS: int
FILE_FILE_COMPRESSION: int
FILE_VOLUME_QUOTAS: int
FILE_SUPPORTS_SPARSE_FILES: int
FILE_SUPPORTS_REPARSE_POINTS: int
FILE_SUPPORTS_REMOTE_STORAGE: int
FILE_VOLUME_IS_COMPRESSED: int
FILE_SUPPORTS_OBJECT_IDS: int
FILE_SUPPORTS_ENCRYPTION: int
MAXIMUM_REPARSE_DATA_BUFFER_SIZE: Incomplete
IO_REPARSE_TAG_RESERVED_ZERO: int
IO_REPARSE_TAG_RESERVED_ONE: int
IO_REPARSE_TAG_SYMBOLIC_LINK: int
IO_REPARSE_TAG_NSS: int
IO_REPARSE_TAG_FILTER_MANAGER: int
IO_REPARSE_TAG_DFS: int
IO_REPARSE_TAG_SIS: int
IO_REPARSE_TAG_MOUNT_POINT: int
IO_REPARSE_TAG_HSM: int
IO_REPARSE_TAG_NSSRECOVER: int
IO_REPARSE_TAG_RESERVED_MS_RANGE: int
IO_REPARSE_TAG_RESERVED_RANGE: int
IO_COMPLETION_MODIFY_STATE: int
DUPLICATE_CLOSE_SOURCE: int
DUPLICATE_SAME_ACCESS: int
DELETE: int
READ_CONTROL: int
WRITE_DAC: int
WRITE_OWNER: int
SYNCHRONIZE: int
STANDARD_RIGHTS_REQUIRED: int
STANDARD_RIGHTS_READ: int
STANDARD_RIGHTS_WRITE: int
STANDARD_RIGHTS_EXECUTE: int
STANDARD_RIGHTS_ALL: int
SPECIFIC_RIGHTS_ALL: int
IO_COMPLETION_ALL_ACCESS: Incomplete
ACCESS_SYSTEM_SECURITY: int
MAXIMUM_ALLOWED: int
GENERIC_READ: int
GENERIC_WRITE: int
GENERIC_EXECUTE: int
GENERIC_ALL: int
SID_REVISION: int
SID_MAX_SUB_AUTHORITIES: int
SID_RECOMMENDED_SUB_AUTHORITIES: int
SidTypeUser: int
SidTypeGroup: int
SidTypeDomain: int
SidTypeAlias: int
SidTypeWellKnownGroup: int
SidTypeDeletedAccount: int
SidTypeInvalid: int
SidTypeUnknown: int
SECURITY_NULL_RID: int
SECURITY_WORLD_RID: int
SECURITY_LOCAL_RID: int
SECURITY_CREATOR_OWNER_RID: int
SECURITY_CREATOR_GROUP_RID: int
SECURITY_CREATOR_OWNER_SERVER_RID: int
SECURITY_CREATOR_GROUP_SERVER_RID: int
SECURITY_DIALUP_RID: int
SECURITY_NETWORK_RID: int
SECURITY_BATCH_RID: int
SECURITY_INTERACTIVE_RID: int
SECURITY_SERVICE_RID: int
SECURITY_ANONYMOUS_LOGON_RID: int
SECURITY_PROXY_RID: int
SECURITY_SERVER_LOGON_RID: int
SECURITY_PRINCIPAL_SELF_RID: int
SECURITY_AUTHENTICATED_USER_RID: int
SECURITY_LOGON_IDS_RID: int
SECURITY_LOGON_IDS_RID_COUNT: int
SECURITY_LOCAL_SYSTEM_RID: int
SECURITY_NT_NON_UNIQUE: int
SECURITY_BUILTIN_DOMAIN_RID: int
DOMAIN_USER_RID_ADMIN: int
DOMAIN_USER_RID_GUEST: int
DOMAIN_GROUP_RID_ADMINS: int
DOMAIN_GROUP_RID_USERS: int
DOMAIN_GROUP_RID_GUESTS: int
DOMAIN_ALIAS_RID_ADMINS: int
DOMAIN_ALIAS_RID_USERS: int
DOMAIN_ALIAS_RID_GUESTS: int
DOMAIN_ALIAS_RID_POWER_USERS: int
DOMAIN_ALIAS_RID_ACCOUNT_OPS: int
DOMAIN_ALIAS_RID_SYSTEM_OPS: int
DOMAIN_ALIAS_RID_PRINT_OPS: int
DOMAIN_ALIAS_RID_BACKUP_OPS: int
DOMAIN_ALIAS_RID_REPLICATOR: int
SE_GROUP_MANDATORY: int
SE_GROUP_ENABLED_BY_DEFAULT: int
SE_GROUP_ENABLED: int
SE_GROUP_OWNER: int
SE_GROUP_LOGON_ID: int
ACL_REVISION: int
ACL_REVISION_DS: int
ACL_REVISION1: int
ACL_REVISION2: int
ACL_REVISION3: int
ACL_REVISION4: int
MAX_ACL_REVISION: int
ACCESS_MIN_MS_ACE_TYPE: int
ACCESS_ALLOWED_ACE_TYPE: int
ACCESS_DENIED_ACE_TYPE: int
SYSTEM_AUDIT_ACE_TYPE: int
SYSTEM_ALARM_ACE_TYPE: int
ACCESS_MAX_MS_V2_ACE_TYPE: int
ACCESS_ALLOWED_COMPOUND_ACE_TYPE: int
ACCESS_MAX_MS_V3_ACE_TYPE: int
ACCESS_MIN_MS_OBJECT_ACE_TYPE: int
ACCESS_ALLOWED_OBJECT_ACE_TYPE: int
ACCESS_DENIED_OBJECT_ACE_TYPE: int
SYSTEM_AUDIT_OBJECT_ACE_TYPE: int
SYSTEM_ALARM_OBJECT_ACE_TYPE: int
ACCESS_MAX_MS_OBJECT_ACE_TYPE: int
ACCESS_MAX_MS_V4_ACE_TYPE: int
ACCESS_MAX_MS_ACE_TYPE: int
ACCESS_ALLOWED_CALLBACK_ACE_TYPE: int
ACCESS_DENIED_CALLBACK_ACE_TYPE: int
ACCESS_ALLOWED_CALLBACK_OBJECT_ACE_TYPE: int
ACCESS_DENIED_CALLBACK_OBJECT_ACE_TYPE: int
SYSTEM_AUDIT_CALLBACK_ACE_TYPE: int
SYSTEM_ALARM_CALLBACK_ACE_TYPE: int
SYSTEM_AUDIT_CALLBACK_OBJECT_ACE_TYPE: int
SYSTEM_ALARM_CALLBACK_OBJECT_ACE_TYPE: int
SYSTEM_MANDATORY_LABEL_ACE_TYPE: int
ACCESS_MAX_MS_V5_ACE_TYPE: int
OBJECT_INHERIT_ACE: int
CONTAINER_INHERIT_ACE: int
NO_PROPAGATE_INHERIT_ACE: int
INHERIT_ONLY_ACE: int
INHERITED_ACE: int
VALID_INHERIT_FLAGS: int
SUCCESSFUL_ACCESS_ACE_FLAG: int
FAILED_ACCESS_ACE_FLAG: int
ACE_OBJECT_TYPE_PRESENT: int
ACE_INHERITED_OBJECT_TYPE_PRESENT: int
SECURITY_DESCRIPTOR_REVISION: int
SECURITY_DESCRIPTOR_REVISION1: int
SECURITY_DESCRIPTOR_MIN_LENGTH: int
SE_OWNER_DEFAULTED: int
SE_GROUP_DEFAULTED: int
SE_DACL_PRESENT: int
SE_DACL_DEFAULTED: int
SE_SACL_PRESENT: int
SE_SACL_DEFAULTED: int
SE_DACL_AUTO_INHERIT_REQ: int
SE_SACL_AUTO_INHERIT_REQ: int
SE_DACL_AUTO_INHERITED: int
SE_SACL_AUTO_INHERITED: int
SE_DACL_PROTECTED: int
SE_SACL_PROTECTED: int
SE_SELF_RELATIVE: int
ACCESS_OBJECT_GUID: int
ACCESS_PROPERTY_SET_GUID: int
ACCESS_PROPERTY_GUID: int
ACCESS_MAX_LEVEL: int
AUDIT_ALLOW_NO_PRIVILEGE: int
ACCESS_DS_SOURCE_A: str
ACCESS_DS_OBJECT_TYPE_NAME_A: str
SE_PRIVILEGE_ENABLED_BY_DEFAULT: int
SE_PRIVILEGE_ENABLED: int
SE_PRIVILEGE_USED_FOR_ACCESS: int
PRIVILEGE_SET_ALL_NECESSARY: int
SE_CREATE_TOKEN_NAME: str
SE_ASSIGNPRIMARYTOKEN_NAME: str
SE_LOCK_MEMORY_NAME: str
SE_INCREASE_QUOTA_NAME: str
SE_UNSOLICITED_INPUT_NAME: str
SE_MACHINE_ACCOUNT_NAME: str
SE_TCB_NAME: str
SE_SECURITY_NAME: str
SE_TAKE_OWNERSHIP_NAME: str
SE_LOAD_DRIVER_NAME: str
SE_SYSTEM_PROFILE_NAME: str
SE_SYSTEMTIME_NAME: str
SE_PROF_SINGLE_PROCESS_NAME: str
SE_INC_BASE_PRIORITY_NAME: str
SE_CREATE_PAGEFILE_NAME: str
SE_CREATE_PERMANENT_NAME: str
SE_BACKUP_NAME: str
SE_RESTORE_NAME: str
SE_SHUTDOWN_NAME: str
SE_DEBUG_NAME: str
SE_AUDIT_NAME: str
SE_SYSTEM_ENVIRONMENT_NAME: str
SE_CHANGE_NOTIFY_NAME: str
SE_REMOTE_SHUTDOWN_NAME: str
TOKEN_ASSIGN_PRIMARY: int
TOKEN_DUPLICATE: int
TOKEN_IMPERSONATE: int
TOKEN_QUERY: int
TOKEN_QUERY_SOURCE: int
TOKEN_ADJUST_PRIVILEGES: int
TOKEN_ADJUST_GROUPS: int
TOKEN_ADJUST_DEFAULT: int
TOKEN_ALL_ACCESS: Incomplete
TOKEN_READ: Incomplete
TOKEN_WRITE: Incomplete
TOKEN_EXECUTE: int
TOKEN_SOURCE_LENGTH: int
TokenPrimary: int
TokenImpersonation: int
TokenUser: int
TokenGroups: int
TokenPrivileges: int
TokenOwner: int
TokenPrimaryGroup: int
TokenDefaultDacl: int
TokenSource: int
TokenType: int
TokenImpersonationLevel: int
TokenStatistics: int
TokenRestrictedSids: int
TokenSessionId: int
TokenGroupsAndPrivileges: int
TokenSessionReference: int
TokenSandBoxInert: int
TokenAuditPolicy: int
TokenOrigin: int
TokenElevationType: int
TokenLinkedToken: int
TokenElevation: int
TokenHasRestrictions: int
TokenAccessInformation: int
TokenVirtualizationAllowed: int
TokenVirtualizationEnabled: int
TokenIntegrityLevel: int
TokenUIAccess: int
TokenMandatoryPolicy: int
TokenLogonSid: int
OWNER_SECURITY_INFORMATION: int
GROUP_SECURITY_INFORMATION: int
DACL_SECURITY_INFORMATION: int
SACL_SECURITY_INFORMATION: int
LABEL_SECURITY_INFORMATION: int
IMAGE_DOS_SIGNATURE: int
IMAGE_OS2_SIGNATURE: int
IMAGE_OS2_SIGNATURE_LE: int
IMAGE_VXD_SIGNATURE: int
IMAGE_NT_SIGNATURE: int
IMAGE_SIZEOF_FILE_HEADER: int
IMAGE_FILE_RELOCS_STRIPPED: int
IMAGE_FILE_EXECUTABLE_IMAGE: int
IMAGE_FILE_LINE_NUMS_STRIPPED: int
IMAGE_FILE_LOCAL_SYMS_STRIPPED: int
IMAGE_FILE_AGGRESIVE_WS_TRIM: int
IMAGE_FILE_LARGE_ADDRESS_AWARE: int
IMAGE_FILE_BYTES_REVERSED_LO: int
IMAGE_FILE_32BIT_MACHINE: int
IMAGE_FILE_DEBUG_STRIPPED: int
IMAGE_FILE_REMOVABLE_RUN_FROM_SWAP: int
IMAGE_FILE_NET_RUN_FROM_SWAP: int
IMAGE_FILE_SYSTEM: int
IMAGE_FILE_DLL: int
IMAGE_FILE_UP_SYSTEM_ONLY: int
IMAGE_FILE_BYTES_REVERSED_HI: int
IMAGE_FILE_MACHINE_UNKNOWN: int
IMAGE_FILE_MACHINE_I386: int
IMAGE_FILE_MACHINE_R3000: int
IMAGE_FILE_MACHINE_R4000: int
IMAGE_FILE_MACHINE_R10000: int
IMAGE_FILE_MACHINE_WCEMIPSV2: int
IMAGE_FILE_MACHINE_ALPHA: int
IMAGE_FILE_MACHINE_POWERPC: int
IMAGE_FILE_MACHINE_SH3: int
IMAGE_FILE_MACHINE_SH3E: int
IMAGE_FILE_MACHINE_SH4: int
IMAGE_FILE_MACHINE_ARM: int
IMAGE_NUMBEROF_DIRECTORY_ENTRIES: int
IMAGE_SIZEOF_ROM_OPTIONAL_HEADER: int
IMAGE_SIZEOF_STD_OPTIONAL_HEADER: int
IMAGE_SIZEOF_NT_OPTIONAL_HEADER: int
IMAGE_NT_OPTIONAL_HDR_MAGIC: int
IMAGE_ROM_OPTIONAL_HDR_MAGIC: int
IMAGE_SUBSYSTEM_UNKNOWN: int
IMAGE_SUBSYSTEM_NATIVE: int
IMAGE_SUBSYSTEM_WINDOWS_GUI: int
IMAGE_SUBSYSTEM_WINDOWS_CUI: int
IMAGE_SUBSYSTEM_WINDOWS_CE_GUI: int
IMAGE_SUBSYSTEM_OS2_CUI: int
IMAGE_SUBSYSTEM_POSIX_CUI: int
IMAGE_SUBSYSTEM_RESERVED8: int
IMAGE_DLLCHARACTERISTICS_WDM_DRIVER: int
IMAGE_DIRECTORY_ENTRY_EXPORT: int
IMAGE_DIRECTORY_ENTRY_IMPORT: int
IMAGE_DIRECTORY_ENTRY_RESOURCE: int
IMAGE_DIRECTORY_ENTRY_EXCEPTION: int
IMAGE_DIRECTORY_ENTRY_SECURITY: int
IMAGE_DIRECTORY_ENTRY_BASERELOC: int
IMAGE_DIRECTORY_ENTRY_DEBUG: int
IMAGE_DIRECTORY_ENTRY_COPYRIGHT: int
IMAGE_DIRECTORY_ENTRY_GLOBALPTR: int
IMAGE_DIRECTORY_ENTRY_TLS: int
IMAGE_DIRECTORY_ENTRY_LOAD_CONFIG: int
IMAGE_DIRECTORY_ENTRY_BOUND_IMPORT: int
IMAGE_DIRECTORY_ENTRY_IAT: int
IMAGE_SIZEOF_SHORT_NAME: int
IMAGE_SIZEOF_SECTION_HEADER: int
IMAGE_SCN_TYPE_NO_PAD: int
IMAGE_SCN_CNT_CODE: int
IMAGE_SCN_CNT_INITIALIZED_DATA: int
IMAGE_SCN_CNT_UNINITIALIZED_DATA: int
IMAGE_SCN_LNK_OTHER: int
IMAGE_SCN_LNK_INFO: int
IMAGE_SCN_LNK_REMOVE: int
IMAGE_SCN_LNK_COMDAT: int
IMAGE_SCN_MEM_FARDATA: int
IMAGE_SCN_MEM_PURGEABLE: int
IMAGE_SCN_MEM_16BIT: int
IMAGE_SCN_MEM_LOCKED: int
IMAGE_SCN_MEM_PRELOAD: int
IMAGE_SCN_ALIGN_1BYTES: int
IMAGE_SCN_ALIGN_2BYTES: int
IMAGE_SCN_ALIGN_4BYTES: int
IMAGE_SCN_ALIGN_8BYTES: int
IMAGE_SCN_ALIGN_16BYTES: int
IMAGE_SCN_ALIGN_32BYTES: int
IMAGE_SCN_ALIGN_64BYTES: int
IMAGE_SCN_LNK_NRELOC_OVFL: int
IMAGE_SCN_MEM_DISCARDABLE: int
IMAGE_SCN_MEM_NOT_CACHED: int
IMAGE_SCN_MEM_NOT_PAGED: int
IMAGE_SCN_MEM_SHARED: int
IMAGE_SCN_MEM_EXECUTE: int
IMAGE_SCN_MEM_READ: int
IMAGE_SCN_MEM_WRITE: int
IMAGE_SCN_SCALE_INDEX: int
IMAGE_SIZEOF_SYMBOL: int
IMAGE_SYM_TYPE_NULL: int
IMAGE_SYM_TYPE_VOID: int
IMAGE_SYM_TYPE_CHAR: int
IMAGE_SYM_TYPE_SHORT: int
IMAGE_SYM_TYPE_INT: int
IMAGE_SYM_TYPE_LONG: int
IMAGE_SYM_TYPE_FLOAT: int
IMAGE_SYM_TYPE_DOUBLE: int
IMAGE_SYM_TYPE_STRUCT: int
IMAGE_SYM_TYPE_UNION: int
IMAGE_SYM_TYPE_ENUM: int
IMAGE_SYM_TYPE_MOE: int
IMAGE_SYM_TYPE_BYTE: int
IMAGE_SYM_TYPE_WORD: int
IMAGE_SYM_TYPE_UINT: int
IMAGE_SYM_TYPE_DWORD: int
IMAGE_SYM_TYPE_PCODE: int
IMAGE_SYM_DTYPE_NULL: int
IMAGE_SYM_DTYPE_POINTER: int
IMAGE_SYM_DTYPE_FUNCTION: int
IMAGE_SYM_DTYPE_ARRAY: int
IMAGE_SYM_CLASS_NULL: int
IMAGE_SYM_CLASS_AUTOMATIC: int
IMAGE_SYM_CLASS_EXTERNAL: int
IMAGE_SYM_CLASS_STATIC: int
IMAGE_SYM_CLASS_REGISTER: int
IMAGE_SYM_CLASS_EXTERNAL_DEF: int
IMAGE_SYM_CLASS_LABEL: int
IMAGE_SYM_CLASS_UNDEFINED_LABEL: int
IMAGE_SYM_CLASS_MEMBER_OF_STRUCT: int
IMAGE_SYM_CLASS_ARGUMENT: int
IMAGE_SYM_CLASS_STRUCT_TAG: int
IMAGE_SYM_CLASS_MEMBER_OF_UNION: int
IMAGE_SYM_CLASS_UNION_TAG: int
IMAGE_SYM_CLASS_TYPE_DEFINITION: int
IMAGE_SYM_CLASS_UNDEFINED_STATIC: int
IMAGE_SYM_CLASS_ENUM_TAG: int
IMAGE_SYM_CLASS_MEMBER_OF_ENUM: int
IMAGE_SYM_CLASS_REGISTER_PARAM: int
IMAGE_SYM_CLASS_BIT_FIELD: int
IMAGE_SYM_CLASS_FAR_EXTERNAL: int
IMAGE_SYM_CLASS_BLOCK: int
IMAGE_SYM_CLASS_FUNCTION: int
IMAGE_SYM_CLASS_END_OF_STRUCT: int
IMAGE_SYM_CLASS_FILE: int
IMAGE_SYM_CLASS_SECTION: int
IMAGE_SYM_CLASS_WEAK_EXTERNAL: int
N_BTMASK: int
N_TMASK: int
N_TMASK1: int
N_TMASK2: int
N_BTSHFT: int
N_TSHIFT: int

def BTYPE(x): ...
def ISPTR(x): ...
def ISFCN(x): ...
def ISARY(x): ...
def INCREF(x): ...
def DECREF(x): ...

IMAGE_SIZEOF_AUX_SYMBOL: int
IMAGE_COMDAT_SELECT_NODUPLICATES: int
IMAGE_COMDAT_SELECT_ANY: int
IMAGE_COMDAT_SELECT_SAME_SIZE: int
IMAGE_COMDAT_SELECT_EXACT_MATCH: int
IMAGE_COMDAT_SELECT_ASSOCIATIVE: int
IMAGE_COMDAT_SELECT_LARGEST: int
IMAGE_COMDAT_SELECT_NEWEST: int
IMAGE_WEAK_EXTERN_SEARCH_NOLIBRARY: int
IMAGE_WEAK_EXTERN_SEARCH_LIBRARY: int
IMAGE_WEAK_EXTERN_SEARCH_ALIAS: int
IMAGE_SIZEOF_RELOCATION: int
IMAGE_REL_I386_ABSOLUTE: int
IMAGE_REL_I386_DIR16: int
IMAGE_REL_I386_REL16: int
IMAGE_REL_I386_DIR32: int
IMAGE_REL_I386_DIR32NB: int
IMAGE_REL_I386_SEG12: int
IMAGE_REL_I386_SECTION: int
IMAGE_REL_I386_SECREL: int
IMAGE_REL_I386_REL32: int
IMAGE_REL_MIPS_ABSOLUTE: int
IMAGE_REL_MIPS_REFHALF: int
IMAGE_REL_MIPS_REFWORD: int
IMAGE_REL_MIPS_JMPADDR: int
IMAGE_REL_MIPS_REFHI: int
IMAGE_REL_MIPS_REFLO: int
IMAGE_REL_MIPS_GPREL: int
IMAGE_REL_MIPS_LITERAL: int
IMAGE_REL_MIPS_SECTION: int
IMAGE_REL_MIPS_SECREL: int
IMAGE_REL_MIPS_SECRELLO: int
IMAGE_REL_MIPS_SECRELHI: int
IMAGE_REL_MIPS_REFWORDNB: int
IMAGE_REL_MIPS_PAIR: int
IMAGE_REL_ALPHA_ABSOLUTE: int
IMAGE_REL_ALPHA_REFLONG: int
IMAGE_REL_ALPHA_REFQUAD: int
IMAGE_REL_ALPHA_GPREL32: int
IMAGE_REL_ALPHA_LITERAL: int
IMAGE_REL_ALPHA_LITUSE: int
IMAGE_REL_ALPHA_GPDISP: int
IMAGE_REL_ALPHA_BRADDR: int
IMAGE_REL_ALPHA_HINT: int
IMAGE_REL_ALPHA_INLINE_REFLONG: int
IMAGE_REL_ALPHA_REFHI: int
IMAGE_REL_ALPHA_REFLO: int
IMAGE_REL_ALPHA_PAIR: int
IMAGE_REL_ALPHA_MATCH: int
IMAGE_REL_ALPHA_SECTION: int
IMAGE_REL_ALPHA_SECREL: int
IMAGE_REL_ALPHA_REFLONGNB: int
IMAGE_REL_ALPHA_SECRELLO: int
IMAGE_REL_ALPHA_SECRELHI: int
IMAGE_REL_PPC_ABSOLUTE: int
IMAGE_REL_PPC_ADDR64: int
IMAGE_REL_PPC_ADDR32: int
IMAGE_REL_PPC_ADDR24: int
IMAGE_REL_PPC_ADDR16: int
IMAGE_REL_PPC_ADDR14: int
IMAGE_REL_PPC_REL24: int
IMAGE_REL_PPC_REL14: int
IMAGE_REL_PPC_TOCREL16: int
IMAGE_REL_PPC_TOCREL14: int
IMAGE_REL_PPC_ADDR32NB: int
IMAGE_REL_PPC_SECREL: int
IMAGE_REL_PPC_SECTION: int
IMAGE_REL_PPC_IFGLUE: int
IMAGE_REL_PPC_IMGLUE: int
IMAGE_REL_PPC_SECREL16: int
IMAGE_REL_PPC_REFHI: int
IMAGE_REL_PPC_REFLO: int
IMAGE_REL_PPC_PAIR: int
IMAGE_REL_PPC_SECRELLO: int
IMAGE_REL_PPC_SECRELHI: int
IMAGE_REL_PPC_TYPEMASK: int
IMAGE_REL_PPC_NEG: int
IMAGE_REL_PPC_BRTAKEN: int
IMAGE_REL_PPC_BRNTAKEN: int
IMAGE_REL_PPC_TOCDEFN: int
IMAGE_REL_SH3_ABSOLUTE: int
IMAGE_REL_SH3_DIRECT16: int
IMAGE_REL_SH3_DIRECT32: int
IMAGE_REL_SH3_DIRECT8: int
IMAGE_REL_SH3_DIRECT8_WORD: int
IMAGE_REL_SH3_DIRECT8_LONG: int
IMAGE_REL_SH3_DIRECT4: int
IMAGE_REL_SH3_DIRECT4_WORD: int
IMAGE_REL_SH3_DIRECT4_LONG: int
IMAGE_REL_SH3_PCREL8_WORD: int
IMAGE_REL_SH3_PCREL8_LONG: int
IMAGE_REL_SH3_PCREL12_WORD: int
IMAGE_REL_SH3_STARTOF_SECTION: int
IMAGE_REL_SH3_SIZEOF_SECTION: int
IMAGE_REL_SH3_SECTION: int
IMAGE_REL_SH3_SECREL: int
IMAGE_REL_SH3_DIRECT32_NB: int
IMAGE_SIZEOF_LINENUMBER: int
IMAGE_SIZEOF_BASE_RELOCATION: int
IMAGE_REL_BASED_ABSOLUTE: int
IMAGE_REL_BASED_HIGH: int
IMAGE_REL_BASED_LOW: int
IMAGE_REL_BASED_HIGHLOW: int
IMAGE_REL_BASED_HIGHADJ: int
IMAGE_REL_BASED_MIPS_JMPADDR: int
IMAGE_REL_BASED_SECTION: int
IMAGE_REL_BASED_REL32: int
IMAGE_ARCHIVE_START_SIZE: int
IMAGE_ARCHIVE_START: str
IMAGE_ARCHIVE_END: str
IMAGE_ARCHIVE_PAD: str
IMAGE_ARCHIVE_LINKER_MEMBER: str
IMAGE_SIZEOF_ARCHIVE_MEMBER_HDR: int
IMAGE_ORDINAL_FLAG: int

def IMAGE_SNAP_BY_ORDINAL(Ordina): ...
def IMAGE_ORDINAL(Ordina): ...

IMAGE_RESOURCE_NAME_IS_STRING: int
IMAGE_RESOURCE_DATA_IS_DIRECTORY: int
IMAGE_DEBUG_TYPE_UNKNOWN: int
IMAGE_DEBUG_TYPE_COFF: int
IMAGE_DEBUG_TYPE_CODEVIEW: int
IMAGE_DEBUG_TYPE_FPO: int
IMAGE_DEBUG_TYPE_MISC: int
IMAGE_DEBUG_TYPE_EXCEPTION: int
IMAGE_DEBUG_TYPE_FIXUP: int
IMAGE_DEBUG_TYPE_OMAP_TO_SRC: int
IMAGE_DEBUG_TYPE_OMAP_FROM_SRC: int
IMAGE_DEBUG_TYPE_BORLAND: int
FRAME_FPO: int
FRAME_TRAP: int
FRAME_TSS: int
FRAME_NONFPO: int
SIZEOF_RFPO_DATA: int
IMAGE_DEBUG_MISC_EXENAME: int
IMAGE_SEPARATE_DEBUG_SIGNATURE: int
IMAGE_SEPARATE_DEBUG_FLAGS_MASK: int
IMAGE_SEPARATE_DEBUG_MISMATCH: int
NULL: int
HEAP_NO_SERIALIZE: int
HEAP_GROWABLE: int
HEAP_GENERATE_EXCEPTIONS: int
HEAP_ZERO_MEMORY: int
HEAP_REALLOC_IN_PLACE_ONLY: int
HEAP_TAIL_CHECKING_ENABLED: int
HEAP_FREE_CHECKING_ENABLED: int
HEAP_DISABLE_COALESCE_ON_FREE: int
HEAP_CREATE_ALIGN_16: int
HEAP_CREATE_ENABLE_TRACING: int
HEAP_MAXIMUM_TAG: int
HEAP_PSEUDO_TAG_FLAG: int
HEAP_TAG_SHIFT: int
IS_TEXT_UNICODE_ASCII16: int
IS_TEXT_UNICODE_REVERSE_ASCII16: int
IS_TEXT_UNICODE_STATISTICS: int
IS_TEXT_UNICODE_REVERSE_STATISTICS: int
IS_TEXT_UNICODE_CONTROLS: int
IS_TEXT_UNICODE_REVERSE_CONTROLS: int
IS_TEXT_UNICODE_SIGNATURE: int
IS_TEXT_UNICODE_REVERSE_SIGNATURE: int
IS_TEXT_UNICODE_ILLEGAL_CHARS: int
IS_TEXT_UNICODE_ODD_LENGTH: int
IS_TEXT_UNICODE_DBCS_LEADBYTE: int
IS_TEXT_UNICODE_NULL_BYTES: int
IS_TEXT_UNICODE_UNICODE_MASK: int
IS_TEXT_UNICODE_REVERSE_MASK: int
IS_TEXT_UNICODE_NOT_UNICODE_MASK: int
IS_TEXT_UNICODE_NOT_ASCII_MASK: int
COMPRESSION_FORMAT_NONE: int
COMPRESSION_FORMAT_DEFAULT: int
COMPRESSION_FORMAT_LZNT1: int
COMPRESSION_ENGINE_STANDARD: int
COMPRESSION_ENGINE_MAXIMUM: int
MESSAGE_RESOURCE_UNICODE: int
RTL_CRITSECT_TYPE: int
RTL_RESOURCE_TYPE: int
SEF_DACL_AUTO_INHERIT: int
SEF_SACL_AUTO_INHERIT: int
SEF_DEFAULT_DESCRIPTOR_FOR_OBJECT: int
SEF_AVOID_PRIVILEGE_CHECK: int
DLL_PROCESS_ATTACH: int
DLL_THREAD_ATTACH: int
DLL_THREAD_DETACH: int
DLL_PROCESS_DETACH: int
EVENTLOG_SEQUENTIAL_READ: int
EVENTLOG_SEEK_READ: int
EVENTLOG_FORWARDS_READ: int
EVENTLOG_BACKWARDS_READ: int
EVENTLOG_SUCCESS: int
EVENTLOG_ERROR_TYPE: int
EVENTLOG_WARNING_TYPE: int
EVENTLOG_INFORMATION_TYPE: int
EVENTLOG_AUDIT_SUCCESS: int
EVENTLOG_AUDIT_FAILURE: int
EVENTLOG_START_PAIRED_EVENT: int
EVENTLOG_END_PAIRED_EVENT: int
EVENTLOG_END_ALL_PAIRED_EVENTS: int
EVENTLOG_PAIRED_EVENT_ACTIVE: int
EVENTLOG_PAIRED_EVENT_INACTIVE: int
KEY_QUERY_VALUE: int
KEY_SET_VALUE: int
KEY_CREATE_SUB_KEY: int
KEY_ENUMERATE_SUB_KEYS: int
KEY_NOTIFY: int
KEY_CREATE_LINK: int
KEY_READ: Incomplete
KEY_WRITE: Incomplete
KEY_EXECUTE: Incomplete
KEY_ALL_ACCESS: Incomplete
REG_OPTION_RESERVED: int
REG_OPTION_NON_VOLATILE: int
REG_OPTION_VOLATILE: int
REG_OPTION_CREATE_LINK: int
REG_OPTION_BACKUP_RESTORE: int
REG_OPTION_OPEN_LINK: int
REG_LEGAL_OPTION: Incomplete
REG_CREATED_NEW_KEY: int
REG_OPENED_EXISTING_KEY: int
REG_STANDARD_FORMAT: int
REG_LATEST_FORMAT: int
REG_NO_COMPRESSION: int
REG_WHOLE_HIVE_VOLATILE: int
REG_REFRESH_HIVE: int
REG_NO_LAZY_FLUSH: int
REG_FORCE_RESTORE: int
REG_NOTIFY_CHANGE_NAME: int
REG_NOTIFY_CHANGE_ATTRIBUTES: int
REG_NOTIFY_CHANGE_LAST_SET: int
REG_NOTIFY_CHANGE_SECURITY: int
REG_LEGAL_CHANGE_FILTER: Incomplete
REG_NONE: int
REG_SZ: int
REG_EXPAND_SZ: int
REG_BINARY: int
REG_DWORD: int
REG_DWORD_LITTLE_ENDIAN: int
REG_DWORD_BIG_ENDIAN: int
REG_LINK: int
REG_MULTI_SZ: int
REG_RESOURCE_LIST: int
REG_FULL_RESOURCE_DESCRIPTOR: int
REG_RESOURCE_REQUIREMENTS_LIST: int
SERVICE_KERNEL_DRIVER: int
SERVICE_FILE_SYSTEM_DRIVER: int
SERVICE_ADAPTER: int
SERVICE_RECOGNIZER_DRIVER: int
SERVICE_DRIVER: Incomplete
SERVICE_WIN32_OWN_PROCESS: int
SERVICE_WIN32_SHARE_PROCESS: int
SERVICE_WIN32: Incomplete
SERVICE_INTERACTIVE_PROCESS: int
SERVICE_TYPE_ALL: Incomplete
SERVICE_BOOT_START: int
SERVICE_SYSTEM_START: int
SERVICE_AUTO_START: int
SERVICE_DEMAND_START: int
SERVICE_DISABLED: int
SERVICE_ERROR_IGNORE: int
SERVICE_ERROR_NORMAL: int
SERVICE_ERROR_SEVERE: int
SERVICE_ERROR_CRITICAL: int
TAPE_ERASE_SHORT: int
TAPE_ERASE_LONG: int
TAPE_LOAD: int
TAPE_UNLOAD: int
TAPE_TENSION: int
TAPE_LOCK: int
TAPE_UNLOCK: int
TAPE_FORMAT: int
TAPE_SETMARKS: int
TAPE_FILEMARKS: int
TAPE_SHORT_FILEMARKS: int
TAPE_LONG_FILEMARKS: int
TAPE_ABSOLUTE_POSITION: int
TAPE_LOGICAL_POSITION: int
TAPE_PSEUDO_LOGICAL_POSITION: int
TAPE_REWIND: int
TAPE_ABSOLUTE_BLOCK: int
TAPE_LOGICAL_BLOCK: int
TAPE_PSEUDO_LOGICAL_BLOCK: int
TAPE_SPACE_END_OF_DATA: int
TAPE_SPACE_RELATIVE_BLOCKS: int
TAPE_SPACE_FILEMARKS: int
TAPE_SPACE_SEQUENTIAL_FMKS: int
TAPE_SPACE_SETMARKS: int
TAPE_SPACE_SEQUENTIAL_SMKS: int
TAPE_DRIVE_FIXED: int
TAPE_DRIVE_SELECT: int
TAPE_DRIVE_INITIATOR: int
TAPE_DRIVE_ERASE_SHORT: int
TAPE_DRIVE_ERASE_LONG: int
TAPE_DRIVE_ERASE_BOP_ONLY: int
TAPE_DRIVE_ERASE_IMMEDIATE: int
TAPE_DRIVE_TAPE_CAPACITY: int
TAPE_DRIVE_TAPE_REMAINING: int
TAPE_DRIVE_FIXED_BLOCK: int
TAPE_DRIVE_VARIABLE_BLOCK: int
TAPE_DRIVE_WRITE_PROTECT: int
TAPE_DRIVE_EOT_WZ_SIZE: int
TAPE_DRIVE_ECC: int
TAPE_DRIVE_COMPRESSION: int
TAPE_DRIVE_PADDING: int
TAPE_DRIVE_REPORT_SMKS: int
TAPE_DRIVE_GET_ABSOLUTE_BLK: int
TAPE_DRIVE_GET_LOGICAL_BLK: int
TAPE_DRIVE_SET_EOT_WZ_SIZE: int
TAPE_DRIVE_EJECT_MEDIA: int
TAPE_DRIVE_RESERVED_BIT: int
TAPE_DRIVE_LOAD_UNLOAD: int
TAPE_DRIVE_TENSION: int
TAPE_DRIVE_LOCK_UNLOCK: int
TAPE_DRIVE_REWIND_IMMEDIATE: int
TAPE_DRIVE_SET_BLOCK_SIZE: int
TAPE_DRIVE_LOAD_UNLD_IMMED: int
TAPE_DRIVE_TENSION_IMMED: int
TAPE_DRIVE_LOCK_UNLK_IMMED: int
TAPE_DRIVE_SET_ECC: int
TAPE_DRIVE_SET_COMPRESSION: int
TAPE_DRIVE_SET_PADDING: int
TAPE_DRIVE_SET_REPORT_SMKS: int
TAPE_DRIVE_ABSOLUTE_BLK: int
TAPE_DRIVE_ABS_BLK_IMMED: int
TAPE_DRIVE_LOGICAL_BLK: int
TAPE_DRIVE_LOG_BLK_IMMED: int
TAPE_DRIVE_END_OF_DATA: int
TAPE_DRIVE_RELATIVE_BLKS: int
TAPE_DRIVE_FILEMARKS: int
TAPE_DRIVE_SEQUENTIAL_FMKS: int
TAPE_DRIVE_SETMARKS: int
TAPE_DRIVE_SEQUENTIAL_SMKS: int
TAPE_DRIVE_REVERSE_POSITION: int
TAPE_DRIVE_SPACE_IMMEDIATE: int
TAPE_DRIVE_WRITE_SETMARKS: int
TAPE_DRIVE_WRITE_FILEMARKS: int
TAPE_DRIVE_WRITE_SHORT_FMKS: int
TAPE_DRIVE_WRITE_LONG_FMKS: int
TAPE_DRIVE_WRITE_MARK_IMMED: int
TAPE_DRIVE_FORMAT: int
TAPE_DRIVE_FORMAT_IMMEDIATE: int
TAPE_DRIVE_HIGH_FEATURES: int
TAPE_FIXED_PARTITIONS: int
TAPE_SELECT_PARTITIONS: int
TAPE_INITIATOR_PARTITIONS: int
TRANSACTIONMANAGER_QUERY_INFORMATION: int
TRANSACTIONMANAGER_SET_INFORMATION: int
TRANSACTIONMANAGER_RECOVER: int
TRANSACTIONMANAGER_RENAME: int
TRANSACTIONMANAGER_CREATE_RM: int
TRANSACTIONMANAGER_BIND_TRANSACTION: int
TRANSACTIONMANAGER_GENERIC_READ: Incomplete
TRANSACTIONMANAGER_GENERIC_WRITE: Incomplete
TRANSACTIONMANAGER_GENERIC_EXECUTE: int
TRANSACTIONMANAGER_ALL_ACCESS: Incomplete
TRANSACTION_QUERY_INFORMATION: int
TRANSACTION_SET_INFORMATION: int
TRANSACTION_ENLIST: int
TRANSACTION_COMMIT: int
TRANSACTION_ROLLBACK: int
TRANSACTION_PROPAGATE: int
TRANSACTION_SAVEPOINT: int
TRANSACTION_MARSHALL: int
TRANSACTION_GENERIC_READ: Incomplete
TRANSACTION_GENERIC_WRITE: Incomplete
TRANSACTION_GENERIC_EXECUTE: Incomplete
TRANSACTION_ALL_ACCESS: Incomplete
TRANSACTION_RESOURCE_MANAGER_RIGHTS: Incomplete
RESOURCEMANAGER_QUERY_INFORMATION: int
RESOURCEMANAGER_SET_INFORMATION: int
RESOURCEMANAGER_RECOVER: int
RESOURCEMANAGER_ENLIST: int
RESOURCEMANAGER_GET_NOTIFICATION: int
RESOURCEMANAGER_REGISTER_PROTOCOL: int
RESOURCEMANAGER_COMPLETE_PROPAGATION: int
RESOURCEMANAGER_GENERIC_READ: Incomplete
RESOURCEMANAGER_GENERIC_WRITE: Incomplete
RESOURCEMANAGER_GENERIC_EXECUTE: Incomplete
RESOURCEMANAGER_ALL_ACCESS: Incomplete
ENLISTMENT_QUERY_INFORMATION: int
ENLISTMENT_SET_INFORMATION: int
ENLISTMENT_RECOVER: int
ENLISTMENT_SUBORDINATE_RIGHTS: int
ENLISTMENT_SUPERIOR_RIGHTS: int
ENLISTMENT_GENERIC_READ: Incomplete
ENLISTMENT_GENERIC_WRITE: Incomplete
ENLISTMENT_GENERIC_EXECUTE: Incomplete
ENLISTMENT_ALL_ACCESS: Incomplete
TransactionOutcomeUndetermined: int
TransactionOutcomeCommitted: int
TransactionOutcomeAborted: int
TransactionStateNormal: int
TransactionStateIndoubt: int
TransactionStateCommittedNotify: int
TransactionBasicInformation: int
TransactionPropertiesInformation: int
TransactionEnlistmentInformation: int
TransactionFullInformation: int
TransactionManagerBasicInformation: int
TransactionManagerLogInformation: int
TransactionManagerLogPathInformation: int
TransactionManagerOnlineProbeInformation: int
ResourceManagerBasicInformation: int
ResourceManagerCompletionInformation: int
ResourceManagerFullInformation: int
ResourceManagerNameInformation: int
EnlistmentBasicInformation: int
EnlistmentRecoveryInformation: int
EnlistmentFullInformation: int
EnlistmentNameInformation: int
KTMOBJECT_TRANSACTION: int
KTMOBJECT_TRANSACTION_MANAGER: int
KTMOBJECT_RESOURCE_MANAGER: int
KTMOBJECT_ENLISTMENT: int
KTMOBJECT_INVALID: int
