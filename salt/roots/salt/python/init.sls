python:
  pkg.installed:
    - reload_modules: True
pip:
    pip.installed:
    - name: pip >= 1.4.0
    - upgrade: True
    - require:
        - pkg: python-pip
pep8:
  pip.installed:
    - require:
      - cmd: python-pip
