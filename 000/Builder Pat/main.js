// The Builder Design Pattern is used to construct complex objects step by step, especially when those objects may have optional attributes.
class URL {
    constructor(builder) {
        this.protocol = builder.protocol;
        this.hostname = builder.hostname;
        this.path = builder.path;
        this.queryParams = builder.queryParams;
        this.fragment = builder.fragment;
    }

    toString() {
        let url = `${this.protocol}://${this.hostname}`;

        if (this.path) {
            url += `/${this.path}`;
        }

        if (this.queryParams && Object.keys(this.queryParams).length > 0) {
            const queryString = Object.entries(this.queryParams)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&');
            url += `?${queryString}`;
        }

        if (this.fragment) {
            url += `#${this.fragment}`;
        }

        return url;
    }
}

class URLBuilder {
    constructor(protocol, hostname) {
        this.protocol = protocol; // Required
        this.hostname = hostname; // Required
        this.path = '';
        this.queryParams = {};
        this.fragment = '';
    }

    setPath(path) {
        this.path = path;
        return this; // Allow method chaining
    }

    addQueryParam(key, value) {
        this.queryParams[key] = value;
        return this; // Allow method chaining
    }

    setFragment(fragment) {
        this.fragment = fragment;
        return this; // Allow method chaining
    }

    build() {
        return new URL(this);
    }
}

// Usage
const url = new URLBuilder('https', 'example.com')
    .setPath('path/to/resource')
    .addQueryParam('search', 'builder pattern')
    .addQueryParam('page', 1)
    .setFragment('section1')
    .build();

console.log(url.toString());
// Output: https://example.com/path/to/resource?search=builder%20pattern&page=1#section1
