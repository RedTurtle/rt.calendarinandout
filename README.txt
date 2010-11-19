Introduction
============

*rt.calendarinandout* provides an archetype widget that allows to add and remove 
dates using the fancy `jquery.ui.datepicker plugin`__

__ http://jqueryui.com/demos/datepicker/

Usage
=====
The widget stores the information in to a LinesField archetype field.

* import the widget from your the package::

    from Products.Archetypes.atapi import LinesField
    from rt.calendarinandout.widget import CalendarInAndOutWidget

* in your archetype schema add a field like this::

    LinesField(
        'dates',
        widget = CalendarInAndOutWidget(
            label=u"Dates",
            description=u"Enter the dates in the form yyyy-mm-dd.",
            ),
    )

Then you can start enjoyng this widget!

Screenshots
-----------
In the edit form your widget will show like this:
.. image:: http://www.redturtle.net/rt.calendarinandout-0.png
    :alt: The widget when no date is selected
    :target: http://www.redturtle.net/

.. image:: http://www.redturtle.net/rt.calendarinandout-1.png
    :alt: Data can be entered manually or clicking but if you click the calendar 
a nice datepicker will popup 
    :target: http://www.redturtle.net/

.. image:: http://www.redturtle.net/rt.calendarinandout-2.png
    :alt: Clicking the plus the date will be added to the selected values, the 
red cross will remove the date
    :target: http://www.redturtle.net/

.. image:: http://www.redturtle.net/rt.calendarinandout-3.png
    :alt: The widget when no date is selected
    :target: http://www.redturtle.net/

.. image:: http://www.redturtle.net/rt.calendarinandout-4.png
    :alt: Add and remove all the dates you want
    :target: http://www.redturtle.net/

.. image:: http://www.redturtle.net/rt.calendarinandout-5.png
    :alt: With javascript disabled the widget is still fully functional
    :target: http://www.redturtle.net/

.. image:: http://www.redturtle.net/rt.calendarinandout-6.png
    :alt: In view the dates are rendered as an unordered list
    :target: http://www.redturtle.net/

Add this egg to your buildout
=============================

You can easily include *rt.calendarinandout* in your buildout (both in the eggs 
and zcml sections)

If you are developing your own egg you can make it depend on *rt.calendarinandout* 
by following those three steps: 
* add *rt.calendarinandout* it in the install_requires section of the setup.py 
of *your egg*::
    
    install_requires=[...
                      'rt.calendarinandout'
                      ...]

* add the dependency in *your egg* profiles/default/metadata.xml file::                   

    <?xml version="1.0"?>
    <metadata>
      <version>...</version>
      <dependencies>
        <dependency>profile-rt.calendarinandout:default</dependency>
      </dependencies>
    </metadata>

* add the dependency in the configure.zcml at the root of your package, 
including this line::

  <include package="rt.calendarinandout" />

Authors
=======

This product was developed by RedTurtle Technology team.

.. image:: http://www.redturtle.net/redturtle_banner.png
   :alt: RedTurtle Technology Site
   :target: http://www.redturtle.net/


TODO
----
* Complete internazionalization
* Now duplicate values are forbidden, this should be an option
* Add an option to trigger the client side validation of the added date format
* Some artwork will be a nice plus :)