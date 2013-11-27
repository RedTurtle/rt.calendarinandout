# -*- coding: utf-8 -*-
"""
This module contains the tool of rt.calendarinandout
"""
import os
from setuptools import setup, find_packages

version = '1.2.0.dev0'

setup(name='rt.calendarinandout',
      version=version,
      description="A LinesWidget-like for Plone, used for selecting dates",
      long_description=open("README.rst").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        'Framework :: Plone',
        'Framework :: Plone :: 4.0',
        'Framework :: Plone :: 4.1',
        'Framework :: Plone :: 4.2',
        'Framework :: Plone :: 4.3',
        'Programming Language :: Python',
        'Programming Language :: JavaScript',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License (GPL)',
        ],
      keywords='plone widget lines calendar jquery jquery-ui',
      author='RedTurtle Technology',
      author_email='sviluppoplone@redturtle.it',
      url='http://plone.org/products/rt.calendarinandout',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['rt', ],
      include_package_data=True,
      zip_safe=False,
      install_requires=['setuptools',
                        'collective.js.jqueryui'
                        'Products.CMFPlone>4.0b1',
                        ],
      entry_points="""
      # -*- entry_points -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
