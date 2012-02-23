# -*- coding: utf-8 -*-
"""
This module contains the tool of rt.calendarinandout
"""
import os
from setuptools import setup, find_packages

version = '1.0.2'

tests_require = ['zope.testing']

setup(name='rt.calendarinandout',
      version=version,
      description="A LinesWidget-like for Plone, used for selecting dates",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        'Framework :: Plone',
        'Programming Language :: Python',
        'Programming Language :: JavaScript',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: GNU General Public License (GPL)',
        ],
      keywords='plone widget lines calendar jquery jquery-ui',
      author='RedTurtle Technology',
      author_email='sviluppoplone@redturtle.net',
      url='http://plone.org/products/rt.calendarinandout',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['rt', ],
      include_package_data=True,
      zip_safe=False,
      install_requires=['setuptools',
                        'collective.js.jqueryui'
                        ],
      tests_require=tests_require,
      extras_require=dict(tests=tests_require),
      test_suite='rt.calendarinandout.tests.test_docs.test_suite',
      entry_points="""
      # -*- entry_points -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
