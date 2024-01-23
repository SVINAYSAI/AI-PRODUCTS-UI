import IPLogic from "./IPLogic";

export default function IpInfoComponent() {
  const { ipInfo, error, handleGetIpInfo } = IPLogic();

  return (
    <div>
      <button onClick={handleGetIpInfo}>Get IP Info</button>
      {ipInfo && (
        <div>
          <h2>IP Information:</h2>
          <pre>{JSON.stringify(ipInfo, null, 2)}</pre>
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
