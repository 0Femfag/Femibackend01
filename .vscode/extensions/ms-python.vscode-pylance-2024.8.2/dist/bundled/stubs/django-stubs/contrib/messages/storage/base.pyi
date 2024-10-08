from typing import Any

from django.http.request import HttpRequest
from django.http.response import HttpResponseBase

LEVEL_TAGS: Any

class Message:
    level: int = ...
    message: str = ...
    extra_tags: str = ...
    def __init__(
        self, level: int, message: str, extra_tags: str | None = ...
    ) -> None: ...
    @property
    def tags(self) -> str: ...
    @property
    def level_tag(self) -> str: ...

class BaseStorage:
    request: HttpRequest = ...
    used: bool = ...
    added_new: bool = ...
    def __init__(self, request: HttpRequest, *args: Any, **kwargs: Any) -> None: ...
    def __len__(self) -> int: ...
    def __iter__(self) -> Any: ...
    def __contains__(self, item: Any) -> Any: ...
    def update(self, response: HttpResponseBase) -> list[Message] | None: ...
    def add(self, level: int, message: str, extra_tags: str | None = ...) -> None: ...
    level: Any = ...
