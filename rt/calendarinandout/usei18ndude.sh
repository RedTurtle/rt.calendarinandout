#!/bin/bash -x

# start with ./use18ndude.sh 

PRODUCT="rt.calendarinandout"

# if you want to add new language, replace language code, 
# uncomment and run these two commands: 
# mkdir -p locales/it/LC_MESSAGES/
# touch locales/it/LC_MESSAGES/$PRODUCT.po 

i18ndude rebuild-pot --pot locales/$PRODUCT.pot --create $PRODUCT ./
i18ndude sync --pot locales/$PRODUCT.pot locales/*/LC_MESSAGES/$PRODUCT.po 

