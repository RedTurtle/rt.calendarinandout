Provides an **Archetypes widget** that allows to **add and remove dates** using the fancy `jquery.ui.datepicker plugin`__

__ http://jqueryui.com/demos/datepicker/

.. contents:: **Table of contents**

Usage
=====

The widget stores the information in to a LinesField archetype field.
To use it just add a field like this in your archetype schema:

.. code-block:: python

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

Configuration
-------------

You can use following additional widget options:

``auto_add``
    Instead of showing an "add date" button/icon, automatically add the date
    when selected on the calendar. Default is true.
``allow_duplicate``
     Allow the selection of the same date more and more times. Default is false.

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

* With JavaScript disabled the widget is still fully functional, falling back to a normal textarea where
  you can insert dates manually

  .. image:: http://keul.it/images/plone/rt.calendarinandout-4.png
     :alt: With JavaScript disabled the widget is still fully functional
     :target: http://keul.it/images/plone/rt.calendarinandout-4.png

* In view the dates are rendered as an unordered list

  .. image:: http://keul.it/images/plone/rt.calendarinandout-5.png
     :alt: In view the dates are rendered as an unordered list
     :target: http://keul.it/images/plone/rt.calendarinandout-5.png

Installation
============

You can easily include **rt.calendarinandout** in your buildout by adding
it in both in the eggs and zcml sections::

    eggs=...
         rt.calendarinandout
         ...

After then, re-run your buildout, restart your instance and activate the rt.calendarinandout
add-on.

TODO
----

* Complete internazionalization
* Add an option to trigger the client side validation of the added date format
* Gives to developer a way to control date format used
* Some artwork will be a nice plus :)
* Refactor JavaScript to not use global namespace

Credits
=======

Developed with the support of:

* `Rete Civica Mo-Net - Comune di Modena`__
  
  .. image:: http://www.comune.modena.it/grafica/logoComune/logoComunexweb.jpg 
     :alt: Comune di Modena's logo

* `Regione Emilia Romagna`__

All of them supports the `PloneGov initiative`__.

__ http://www.comune.modena.it/
__ http://www.regione.emilia-romagna.it/
__ http://www.plonegov.it/

Authors
=======

This product was developed by RedTurtle Technology team.

.. image:: http://www.redturtle.it/redturtle_banner.png
   :alt: RedTurtle Technology Site
   :target: http://www.redturtle.it/

