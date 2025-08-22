function showBanner() {
    // Get the unversioned meta tag content
    const unversionedMeta = document.querySelector('meta[name="unversioned"]');
    const isUnversioned = unversionedMeta && unversionedMeta.getAttribute('content') === 'true';
    
    // If the page is not unversioned, show the banner
    if (!isUnversioned) {
        return true;
    }
    
    // Fetch the version switcher JSON to find the preferred version
    return fetch(DOCUMENTATION_OPTIONS.theme_switcher_json_url)
        .then(response => response.json())
        .then(versions => {
            // Find the preferred version
            const preferredVersion = versions.find(version => version.preferred === true);
            
            // If no preferred version found, show the banner
            if (!preferredVersion) {
                return true;
            }
            
            // If current version matches preferred version, don't show banner
            if (DOCUMENTATION_OPTIONS.theme_switcher_version_match === preferredVersion.version) {
                console.log("Current version ", DOCUMENTATION_OPTIONS.theme_switcher_version_match, " matches preferred version, not showing banner.");
                return false;
            }
            
            // Otherwise, show the banner
            console.log("Current version ", DOCUMENTATION_OPTIONS.theme_switcher_version_match, " does not match preferred version, showing banner.");
            return true;
        })
        .catch(error => {
            console.warn('Failed to fetch version switcher data:', error);
            // On error, default to showing the banner
            return true;
        });
}
