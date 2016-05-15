api:
  cmd.wait:
    - name: {{ pillar["system_user_home"] }}/run-server.sh
    - runas : {{ pillar["system_user"] }}
    - watch:
      - cmd: node

{{ pillar["system_user_home"] }}/.run-server.sh:
    file.managed:
        - source: salt://api/run-server.sh
        - user: {{ pillar["system_user"] }}
        - group: {{ pillar["system_user"] }}
        - mode: 750
