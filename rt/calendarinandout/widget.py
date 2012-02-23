# -*- coding: utf-8 -*-

from Globals import InitializeClass
from Products.Archetypes.public import LinesWidget
from Products.Archetypes.Registry import registerWidget

class CalendarInAndOutWidget(LinesWidget):
    """A Lines Widget for Dates string, with a popup calendar"""

    _properties = LinesWidget._properties.copy()
    _properties.update({
        'macro' : 'rt_calendarinandout',
#        'dateformat' : '%d/%m/%Y',
        'with_time' : False,
        'default_hour' : 0,
        'default_minute' : 0,
        'auto_add': False,
        })

    def init_calendar(self, field_name):
        """
        Initializes js calendar machinery
        """
        lang = self.portal_languages.getLanguageBindings()[0]
        return """
        <script type="text/javascript" src="jquery.ui.datepicker-%s.js"></script>
        <script type="text/javascript">
            <!--
                jq('document').ready(function(){
                    rtciao_init('%s', %s);
                });
            //-->
        </script>
""" % (lang, field_name, self.auto_add and 'true' or 'false')

InitializeClass(CalendarInAndOutWidget)

registerWidget(CalendarInAndOutWidget,
               title='CalendarInAndOutWidget',
               description='A widget for adding multiple date information on a Lines Field',
               used_for=('Products.Archetypes.Field.LinesField',)
               )

