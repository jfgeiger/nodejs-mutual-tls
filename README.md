# Build

```
bash generate-certificates.sh
npm install
```

# Run

```
node .
```

# Demo

```
curl -v http://localhost:9443
```

The request gets rejected because it requires TLS.

```
curl -v https://localhost:9443
```

The request gets rejected due to the missing CA.

```
curl -v -k https://localhost:9443
```

or

```
curl -v \
    --cacert certificates/intermediate-ca.crt \
    https://localhost:9443
```

The request gets rejected due to a missing client certificate.

```
curl -v \
    --cacert certificates/intermediate-ca.crt \
    --cert certificates/client.crt \
    --key certificates/client.key \
    https://localhost:9443
```

The request returns with the expected result `Hello, client!`.

```
curl -v \
    --cacert certificates/intermediate-ca.crt \
    --cert certificates/malicious-client.crt \
    --key certificates/malicious-client.key \
    https://localhost:9443
```

The request gets rejected due to a faulty client certificate (wrong CA).
