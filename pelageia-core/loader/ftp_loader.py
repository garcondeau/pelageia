import os
from urllib.request import urlopen
import shutil
from contextlib import closing
from utils.consts import PATHS


def get_file_from_url(supplier, url, file_name):
    save_folder = os.path.join(PATHS.TEMP_STORAGE, supplier)
    if not os.path.exists(save_folder):
        os.makedirs(save_folder)
    save_path = os.path.join(save_folder, file_name)
    with closing(urlopen(url)) as r:
        with open(save_path, 'wb') as f:
            shutil.copyfileobj(r, f)

    return save_path