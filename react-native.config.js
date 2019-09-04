module.exports = {
    dependencies: {
        'react-native-keep-screen-on': {
            platforms: {
                android: {
                    packageImportPath: "import com.gijoehosaphat.keepscreenon.KeepScreenOnPackage;",
                    packageInstance: "new KeepScreenOnPackage()"
                }
            }
        }
    }
};
