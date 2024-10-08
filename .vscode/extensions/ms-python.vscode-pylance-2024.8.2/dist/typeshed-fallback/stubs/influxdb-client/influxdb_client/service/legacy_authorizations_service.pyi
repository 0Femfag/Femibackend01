from _typeshed import Incomplete

from influxdb_client.service._base_service import _BaseService

class LegacyAuthorizationsService(_BaseService):
    def __init__(self, api_client: Incomplete | None = None) -> None: ...
    def delete_legacy_authorizations_id(self, auth_id, **kwargs): ...
    def delete_legacy_authorizations_id_with_http_info(self, auth_id, **kwargs): ...
    async def delete_legacy_authorizations_id_async(self, auth_id, **kwargs): ...
    def get_legacy_authorizations(self, **kwargs): ...
    def get_legacy_authorizations_with_http_info(self, **kwargs): ...
    async def get_legacy_authorizations_async(self, **kwargs): ...
    def get_legacy_authorizations_id(self, auth_id, **kwargs): ...
    def get_legacy_authorizations_id_with_http_info(self, auth_id, **kwargs): ...
    async def get_legacy_authorizations_id_async(self, auth_id, **kwargs): ...
    def patch_legacy_authorizations_id(self, auth_id, authorization_update_request, **kwargs): ...
    def patch_legacy_authorizations_id_with_http_info(self, auth_id, authorization_update_request, **kwargs): ...
    async def patch_legacy_authorizations_id_async(self, auth_id, authorization_update_request, **kwargs): ...
    def post_legacy_authorizations(self, legacy_authorization_post_request, **kwargs): ...
    def post_legacy_authorizations_with_http_info(self, legacy_authorization_post_request, **kwargs): ...
    async def post_legacy_authorizations_async(self, legacy_authorization_post_request, **kwargs): ...
    def post_legacy_authorizations_id_password(self, auth_id, password_reset_body, **kwargs): ...
    def post_legacy_authorizations_id_password_with_http_info(self, auth_id, password_reset_body, **kwargs): ...
    async def post_legacy_authorizations_id_password_async(self, auth_id, password_reset_body, **kwargs): ...
