DAEMON_ADDRESS_KEY: str
DEFAULT_ADDRESS: str

class DaemonConfig:
    def __init__(self, daemon_address="127.0.0.1:2000") -> None: ...
    @property
    def udp_ip(self): ...
    @property
    def udp_port(self): ...
    @property
    def tcp_ip(self): ...
    @property
    def tcp_port(self): ...
