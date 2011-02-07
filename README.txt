Introduction
============

**rt.calendarinandout** provides an archetype widget that allows to add and remove
dates using the fancy `jquery.ui.datepicker plugin`__

__ http://jqueryui.com/demos/datepicker/

Usage
=====

The widget stores the information in to a LinesField archetype field.
To use it just add a field like this in your archetype schema::

    from Products.Archetypes.atapi import LinesField
    from rt.calendarinandout.widget import CalendarInAndOutWidget

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

* The widget when no date is selected

  .. image:: http://keul.it/images/plone/rt.calendarinandout-0.png
     :alt: The widget when no date is selected
     :target: http://keul.it/images/plone/rt.calendarinandout-0.png

* Data can be entered manually or clicking. If you click the calendar a nice datepicker will popup

  .. image:: http://keul.it/images/plone/rt.calendarinandout-1.png
     :alt: Data can be entered manually or clicking. If you click the calendar a nice datepicker will popup 
     :target: http://keul.it/images/plone/rt.calendarinandout-1.png

* Clicking the plus the date will be added to the selected values, the red cross will remove the date

  .. image:: http://keul.it/images/plone/rt.calendarinandout-2.png
     :alt: Clicking the plus the date will be added to the selected values, the red cross will remove the date
     :target: http://keul.it/images/plone/rt.calendarinandout-2.png

  You can also set the ``auto_add`` option for not displaying any "plus" icon, and add the date to the list
  when a date is selected.

* Add and remove all the dates you want

  .. image:: http://keul.it/images/plone/rt.calendarinandout-3.png
     :alt: Add and remove all the dates you want
     :target: http://keul.it/images/plone/rt.calendarinandout-3.png

* With javascript disabled the widget is still fully functional, falling back to a normal textarea where
  you can insert dates manually

  .. image:: http://keul.it/images/plone/rt.calendarinandout-4.png
     :alt: With javascript disabled the widget is still fully functional
     :target: http://keul.it/images/plone/rt.calendarinandout-4.png

* In view the dates are rendered as an unordered list

  .. image:: http://keul.it/images/plone/rt.calendarinandout-5.png
     :alt: In view the dates are rendered as an unordered list
     :target: http://keul.it/images/plone/rt.calendarinandout-5.png

Add this egg to your buildout
=============================

Direct installation
-------------------

You can easily include **rt.calendarinandout** in your buildout by adding
it in both in the eggs and zcml sections::

    eggs=...
         rt.calendarinandout
         ...

    zcml=...
         rt.calendarinandout
         ...

Triggering the installation from your own egg
---------------------------------------------

If you are developing your own egg you can make it depend on **rt.calendarinandout** 
by following those three steps:

* add **rt.calendarinandout** it in the install_requires section of the setup.py
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

* add the dependency in the configure.zcml at the root of your package, including this line::

    <include package="rt.calendarinandout" />

Credits
=======

Developed with the support of `Comune di Modena`__; Comune di Modena supports the
`PloneGov initiative`__.

.. image:: http://www.comune.modena.it/grafica/logoComune/logoComunexweb.jpg 
   :alt: Comune di Modena's logo

__ http://www.comune.modena.it/
__ http://www.plonegov.it/

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
