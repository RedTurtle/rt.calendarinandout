# -*- coding: utf-8 -*-
from Globals import InitializeClass
from Products.Archetypes.public import LinesWidget
from Products.Archetypes.Registry import registerWidget

class CalendarInAndOut(LinesWidget):
    """ A widget"""

    _properties = LinesWidget._properties.copy()
    _properties.update({
        'macro' : 'rt_calendarinandout',
        'dateformat' : '%d/%m/%Y',
        'with_time' : False,
        'default_hour' : 0,
        'default_minute' : 0,
        })

    def initjs(self):
        """
        Initializes js calendar machinery
        """
        return ("""
        <script type="text/javascript">
            <!--
                calendarinandoutinit('%s');
            //-->
        </script>
""") % 'except'

InitializeClass(CalendarInAndOut)

registerWidget(CalendarInAndOut,
               title='CalendarInAndOut',
               description='A calendar widget',
               used_for=('Products.Archetypes.Field.LinesField',)
               )

