class params_builder:
    @staticmethod
    def get_supplier_params(supplier_params):
        params = {
            'supplier_name': supplier_params['supplier_name'],
            'status': supplier_params['status'],
            'updated': supplier_params['updated'],
            'download_files': supplier_params['download_files'],
            'files': params_builder.parse_file_params(supplier_params),
            'sql': supplier_params.get('sql')
        }
        return params

    @classmethod
    def parse_file_params(cls, supplier_config):
        files = supplier_config['files']
        files_params = []
        for file in files:
            files_params.append({
                'file_name': file.get('file_name'),
                'file_type': file.get('file_type', 'csv'),
                'filepath_or_buffer': file.get('url'),
                'sep': file.get('sep', ';'),
                'decimal': file.get('decimal', '.'),
                'skip_rows': file.get('skip_rows', 0),
                'header': file.get('header', 'int'),
                'compression': file.get('compression', 'infer'),
                'low_memory': file.get('low_memory', True),
                'encoding_errors': file.get('encoding_errors', 'strict'),
                'encoding': file.get('encoding', 'latin-1'),
                'engine': file.get('engine', 'python'),
                'on_bad_lines': file.get('on_bad_lines', 'skip'),
                'use_cols': file.get('use_cols'),
                'columns': file.get('columns', {0: 'A'})
            })
        return files_params
